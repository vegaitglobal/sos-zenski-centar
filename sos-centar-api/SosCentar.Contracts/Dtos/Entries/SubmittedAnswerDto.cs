using System;

namespace SosCentar.Contracts.Dtos.Entries
{
	public class SubmittedAnswerDto
	{
		public Guid QuestionId { get; set; }
		public Guid AnswerId { get; set; }
	}
}
