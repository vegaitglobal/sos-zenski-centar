using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Repositories
{
    public interface IEntryRepository
    {
        void Create(Entry entry);
        IEnumerable<Entry> GetInRange(DateTime From, DateTime To);
        IEnumerable<Entry> GetInRangeForCategoryId(Guid item, DateTime from, DateTime to);
        IEnumerable<Entry> GetInRangeForQuestionName(string text, DateTime from, DateTime to);
    }
}
