using SosCentar.Contracts.Dtos.Entries;

namespace SosCentar.Contracts.Interfaces.Services
{
	public interface IEntryService
	{
		public void Create(EntryDto submittedEntryDto, string userEmail);
	}
}
