using System;
using System.Collections.Generic;

namespace SosCentar.Domain.Models
{
    public class Section
    {
        public Guid Id { get; set; }
		public string Name { get; set; }
		public IEnumerable<Question> Questions { get; set; }
        public int Order { get; set; }
    }
}
