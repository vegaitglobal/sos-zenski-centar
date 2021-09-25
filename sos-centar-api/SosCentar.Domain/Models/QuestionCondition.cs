using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace SosCentar.Domain.Models
{
	public class QuestionCondition
	{
		public Guid Id { get; set; }
		public Guid QuestionIdMaster { get; set; }
		[ForeignKey(nameof(Question.QuestionCondition))]
		public Guid QuestionId { get; set; }
		public Guid AnswerId { get; set; }
	}
}
