using System;
using System.Collections.Generic;

namespace SosCentar.Domain.Models
{
    public class Entry
    {
        public Guid Id { get; set; }
        public string Description { get; set; }
        public Category Category { get; set; }
        public User User { get; set; }
        public DateTime Date { get; set; }
        public IEnumerable<SubmitedAnswer> SubmitedAnswers { get; set; } = new List<SubmitedAnswer>();
    }
}
