using SosCentar.Contracts.Dtos.Entries;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
	public class EntryService : IEntryService
	{
		private readonly IUserService _userService;
		private readonly IEntryRepository _entryRepository;
		private readonly IAnswerService _answerService;
		private readonly IQuestionService _questionService;

		public EntryService(IUserService userService, IEntryRepository entryRepository, IAnswerService answerService, IQuestionService questionService)
		{
			_userService = userService;
			_entryRepository = entryRepository;
			_answerService = answerService;
			_questionService = questionService;
		}


		public void Create(EntryDto entryDto, string userEmail)
		{
			var user = _userService.GetByEmail(userEmail);

			var submitedAnswers = new List<SubmitedAnswer>();
			foreach (var item in entryDto.SubmittedAnswers)
			{
				var answer = _answerService.GetById(item.AnswerId);
				var question = _questionService.GetById(item.QuestionId);
				submitedAnswers.Add(new SubmitedAnswer() { Answer = answer, Question = question });
			}

			var entry = new Entry() { Date = DateTime.Now, Description = entryDto.Description, User = user, SubmitedAnswers = submitedAnswers };

			_entryRepository.Create(entry);
		}
	}
}
