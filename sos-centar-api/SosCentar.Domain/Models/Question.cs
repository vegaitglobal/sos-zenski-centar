using System;
using System.Collections.Generic;

namespace SosCentar.Domain.Models
{
    public class Question
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
        public IEnumerable<Question> Answers { get; set; }
        public QuestionCondition QuestionCondition { get; set; }
        public int OrderBy { get; set; }
    }
}
