using Microsoft.EntityFrameworkCore;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.DataAccess.Repositories
{
	public class CategoryRepository : ICategoryRepository
	{
		private readonly ReportContext _reportContext;

		public CategoryRepository(ReportContext reportContext)
		{
			_reportContext = reportContext;
		}

		public IEnumerable<Category> GetAllCategories()
		{
			return _reportContext.Categories.AsEnumerable();
		}

		public Category GetById(Guid id)
		{
			var category = _reportContext.Categories
				.Include(category => category.Sections)
					.ThenInclude(section => section.Questions)
					.ThenInclude(question => question.Answers)
				.FirstOrDefault(category => category.Id == id);

			if (category == null)
			{
				return null;
			}

			var temp = category.Sections.SelectMany(section => section.Questions.Select(question => question.Id));

			foreach (var section in category.Sections)
			{
				foreach (var question in section.Questions)
				{
					var questionCondition = _reportContext.QuestionConditions
							.FirstOrDefault(questionCondition => questionCondition.QuestionId == question.Id);

					question.QuestionCondition = questionCondition;
				}
			}

			return category;
		}
	}
}
