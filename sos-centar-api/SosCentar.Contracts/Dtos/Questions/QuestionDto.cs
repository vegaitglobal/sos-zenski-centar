using SosCentar.Contracts.Dtos.Answers;
using SosCentar.Contracts.Dtos.QuestionConditions;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Dtos.Questions
{
	public class QuestionDto
	{
		public Guid Id { get; set; }
		public string Icon { get; set; }
		public string Label { get; set; }
		public IEnumerable<AnswerDto> Options { get; set; }
		public QuestionConditionDto Condition { get; set; }
	}
}
