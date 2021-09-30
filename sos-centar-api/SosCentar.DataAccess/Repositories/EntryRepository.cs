using Microsoft.EntityFrameworkCore;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SosCentar.DataAccess.Repositories
{
    public class EntryRepository : IEntryRepository
    {
        private readonly ReportContext _reportContext;

        public EntryRepository(ReportContext reportContext)
        {
            _reportContext = reportContext;
        }

        public void Create(Entry entry)
        {
            _reportContext.Entries.Add(entry);
            _reportContext.SaveChanges();
        }
        public IEnumerable<Entry> GetInRange(DateTime From, DateTime To)
        {
            return _reportContext.Entries
                .Include(entry => entry.User)
                .Include(entry => entry.SubmitedAnswers)
                    .ThenInclude(submitedAnswer => submitedAnswer.Question)
                .Include(entry => entry.SubmitedAnswers)
                    .ThenInclude(submitedAnswer => submitedAnswer.Answer)
                .Where(Enntry => (From <= Enntry.Date && Enntry.Date <= To));
        }

        public IEnumerable<Entry> GetInRangeForCategoryId(Guid categoryId, DateTime from, DateTime to)
        {
            return GetInRange(from, to).Where(entry => entry.Category.Id == categoryId);
        }

        public IEnumerable<Entry> GetInRangeForQuestionName(string questionName, DateTime from, DateTime to)
        {
            return GetInRange(from, to)
                .Where(entry => entry.SubmitedAnswers
                    .Where(submittedAnswer => submittedAnswer.Question.Text == questionName)
                        .Any());
        }
    }
}
