using Microsoft.EntityFrameworkCore;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.DataAccess.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly ReportContext _reportContext;

        public QuestionRepository(ReportContext reportContext)
        {
            _reportContext = reportContext;
        }

        public Question GetById(Guid id)
        {
            return _reportContext.Questions.FirstOrDefault(question => question.Id == id);
        }

        public IEnumerable<Question> GetByName(string name)
        {
            return _reportContext.Questions.Include(question => question.Answers).Where(question => question.Text == name);
        }
    }
}
