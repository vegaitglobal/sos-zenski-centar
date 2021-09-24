using System;

namespace SosCentar.Domain.Models
{
    public class Section
    {
        public Guid Id { get; set; }
        public Question Question { get; set; }
        public int OrderBy { get; set; }
    }
}
