using SosCentar.Contracts.Dtos.Answers;
using SosCentar.Contracts.Dtos.Categories;
using SosCentar.Contracts.Dtos.QuestionConditions;
using SosCentar.Contracts.Dtos.Questions;
using SosCentar.Contracts.Dtos.Sections;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public IEnumerable<CategoryListDto> GetAll()
        {
            return _categoryRepository.GetAllCategories()
                .OrderBy(category => category.Order)
                .Select(category => new CategoryListDto() { Id = category.Id, Label = category.Name });
        }

        public CategoryDto GetById(Guid id)
        {
            var category = _categoryRepository.GetById(id);

            var sortedSectionDtos = category.Sections
                .OrderBy(section => section.Order)
                .Select(GetSectionDto)
                .ToArray();

            var numberOfSections = sortedSectionDtos.Count();

            return new CategoryDto()
            {
                CallerInfo = numberOfSections > 0 ? sortedSectionDtos[0] : null,
                ServiceInfo = numberOfSections > 1 ? sortedSectionDtos[1] : null,
                ActionInfoInfo = numberOfSections > 2 ? sortedSectionDtos[2] : null
            };
        }

        private SectionDto GetSectionDto(Section section)
        {
            return new SectionDto()
            {
                Id = section.Id,
                SectionName = section.Name,
                Questions = section.Questions.OrderBy(question => question.Order).Select(GetQuestionDto)
            };
        }

        private QuestionDto GetQuestionDto(Question question)
        {
            return new QuestionDto()
            {
                Id = question.Id,
                Icon = question.Icon,
                Label = question.Text,
                IsRequired = question.IsRequired,
                Condition = new QuestionConditionDto() { AnswerId = question.QuestionCondition.AnswerId, QuestionId = question.QuestionCondition.QuestionIdMaster },
                Options = question.Answers.OrderBy(answer => answer.Order).Select(GetAnswerDto)
            };
        }

        private AnswerDto GetAnswerDto(Answer answer)
        {
            return new AnswerDto()
            {
                Id = answer.Id,
                Label = answer.Text
            };
        }
    }
}
