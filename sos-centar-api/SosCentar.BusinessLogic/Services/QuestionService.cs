using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using SosCentar.Domain.Models;
using System;

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
	}
}
