using SosCentar.Contracts.Dtos.Entries;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SosCentar.BusinessLogic.Services
{
    public class EntryService : IEntryService
    {
        private readonly IUserService _userService;
        private readonly IEntryRepository _entryRepository;
        private readonly IAnswerService _answerService;
        private readonly IQuestionService _questionService;
        private readonly ICategoryService _categoryService;

        public EntryService(IUserService userService, IEntryRepository entryRepository, IAnswerService answerService, IQuestionService questionService, ICategoryService categoryService)
        {
            _userService = userService;
            _entryRepository = entryRepository;
            _answerService = answerService;
            _questionService = questionService;
            _categoryService = categoryService;
        }


        public void Create(EntryDto entryDto, string userEmail)
        {
            var user = _userService.GetByEmail(userEmail);

            var submitedAnswers = new List<SubmitedAnswer>();
            foreach (var item in entryDto.SubmittedAnswers)
            {
                var answer = _answerService.GetById(item.AnswerId);
                var question = _questionService.GetById(item.QuestionId);
                if (question.IsRequired && answer is not null)
                {
                    throw new ValidationException($"{question.Text} is not answered");

                }
                submitedAnswers.Add(new SubmitedAnswer() { Answer = answer, Question = question });
            }

            var categoryDto = _categoryService.GetBaseInfoById(entryDto.CategoryId);

            var entry = new Entry() { Date = DateTime.Now, Description = entryDto.Description, User = user, SubmitedAnswers = submitedAnswers, Category = new Category() { Id = categoryDto.Id } };

            _entryRepository.Create(entry);
        }
    }
}
