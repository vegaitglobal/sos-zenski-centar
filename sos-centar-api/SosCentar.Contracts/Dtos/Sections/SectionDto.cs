using SosCentar.Contracts.Dtos.Questions;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Dtos.Sections
{
	public class SectionDto
	{
		public Guid Id { get; set; }
		public string SectionName { get; set; }
		public IEnumerable<QuestionDto> Questions { get; set; }
	}
}
