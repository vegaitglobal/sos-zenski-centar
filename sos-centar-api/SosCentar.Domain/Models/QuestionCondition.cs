using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace SosCentar.Domain.Models
{
    public class QuestionCondition
    {
        public Guid Id { get; set; }
        public Guid QuestionId { get; set; }
        public Guid AnswerId { get; set; }
    }
}
