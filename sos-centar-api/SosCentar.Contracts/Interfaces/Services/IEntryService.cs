using SosCentar.Contracts.Dtos.Entries;

namespace SosCentar.Contracts.Interfaces.Services
{
	public interface IEntryService
	{
		public void Create(SubmittedEntryDto submittedEntryDto, string userEmail);
	}
}
