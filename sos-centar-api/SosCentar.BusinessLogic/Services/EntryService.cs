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
        private readonly IEntryRepository _entryRepository;
        private readonly IAnswerRepository _answerRepository;
        private readonly IQuestionRepository _questionRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IUserRepository _userRepository;

        public EntryService(IEntryRepository entryRepository, IAnswerRepository answerRepository, IQuestionRepository questionRepository, ICategoryRepository categoryRepository, IUserRepository userRepository)
        {
            _entryRepository = entryRepository;
            _answerRepository = answerRepository;
            _questionRepository = questionRepository;
            _categoryRepository = categoryRepository;
            _userRepository = userRepository;
        }


        public void Create(EntryDto entryDto, string userEmail)
        {
            var user = _userRepository.GetByEmail(userEmail);

            var submitedAnswers = new List<SubmitedAnswer>();
            foreach (var item in entryDto.SubmittedAnswers)
            {
                var answer = _answerRepository.GetById(item.AnswerId);
                var question = _questionRepository.GetById(item.QuestionId);
                if (question is null)
                {
                    throw new ValidationException($"Question {item.QuestionId} does not exists");
                }
                if (question.IsRequired && answer is null)
                {
                    throw new ValidationException($"{question.Text} is not answered");
                }
                submitedAnswers.Add(new SubmitedAnswer() { Answer = answer, Question = question });
            }

            var category = _categoryRepository.GetById(entryDto.CategoryId);

            var entry = new Entry() { Date = DateTime.Now, Description = entryDto.Description, User = user, SubmitedAnswers = submitedAnswers, Category = category };

            _entryRepository.Create(entry);
        }
    }
}
