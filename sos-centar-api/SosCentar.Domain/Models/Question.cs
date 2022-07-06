using System;
using System.Collections.Generic;

namespace SosCentar.Domain.Models
{
    public class Question
    {
        public Guid Id { get; set; }
        public string Text { get; set; }
        public IEnumerable<Answer> Answers { get; set; } = new List<Answer>();
        public QuestionCondition QuestionCondition { get; set; }
        public int Order { get; set; }
        public bool IsRequired { get; set; }
        public string Icon { get; set; }
        public bool MultipleAnswers { get; set; }   
    }
}
