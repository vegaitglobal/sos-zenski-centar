using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Dtos.Entries
{
    public class EntryDto
    {
        public Guid CategoryId { get; set; }
        public string Description { get; set; }
        public IEnumerable<SubmittedAnswerDto> SubmittedAnswers { get; set; }
    }
}
