using System;

namespace SosCentar.Domain.Models
{
    public class Question
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
        public int OrderBy { get; set; }
    }
}
