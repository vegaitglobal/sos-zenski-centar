using Microsoft.EntityFrameworkCore;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.DataAccess.Repositories
{
	public class AnswerRepository : IAnswerRepository
	{
		private readonly ReportContext _reportContext;

		public AnswerRepository(ReportContext reportContext)
		{
			_reportContext = reportContext;
		}

		public Answer GetById(Guid id)
		{
			return _reportContext.Answers.FirstOrDefault(answer => answer.Id == id);
		}
	}
}
