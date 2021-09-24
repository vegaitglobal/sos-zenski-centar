using System;

namespace SosCentar.Domain.Models
{
    public class Answer
    {
        public Guid Id { get; set; }
        public Question Question { get; set; }
        public string Text { get; set; }
    }
}
