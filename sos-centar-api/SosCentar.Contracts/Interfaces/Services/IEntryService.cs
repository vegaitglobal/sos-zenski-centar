using SosCentar.Contracts.Dtos.Entries;
using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IEntryService
    {
        public void Create(EntryDto submittedEntryDto, string userEmail);
        public IEnumerable<Entry> GetAllForCategoryId(Guid categoryId);
        public IEnumerable<Entry> GetAllForCategoryId(Guid categoryId, DateTime from, DateTime to);
        public IEnumerable<Entry> GetAllForQuestionName(string questionName);
    }
}
