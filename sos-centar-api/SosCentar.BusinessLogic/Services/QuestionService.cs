using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;

namespace SosCentar.BusinessLogic.Services
{
	public class QuestionService : IQuestionService
	{
		private readonly IQuestionRepository _questionRepository;

		public QuestionService(IQuestionRepository questionRepository)
		{
			_questionRepository = questionRepository;
		}

		public Question GetById(Guid id)
		{
			return _questionRepository.GetById(id);
		}

		public IEnumerable<Question> GetByName(string name)
		{
			return _questionRepository.GetByName(name);
		}
	}
}
