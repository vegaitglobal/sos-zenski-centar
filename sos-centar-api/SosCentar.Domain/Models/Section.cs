using System;
using System.Collections.Generic;
using System.Linq;

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
