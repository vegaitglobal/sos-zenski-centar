using System.Collections.Generic;

namespace SosCentar.Contracts.Dtos.Entries
{
	public class SubmittedEntryDto
	{
		public string Description { get; set; }
		public IEnumerable<SubmittedAnswerDto> SubmittedAnswers { get; set; }
	}
}
