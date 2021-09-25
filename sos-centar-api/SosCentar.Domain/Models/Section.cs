using System;
using System.Collections.Generic;

namespace SosCentar.Domain.Models
{
    public class Section
    {
        public Guid Id { get; set; }
        public IEnumerable<Question> Questions { get; set; }
        public int OrderBy { get; set; }
    }
}
