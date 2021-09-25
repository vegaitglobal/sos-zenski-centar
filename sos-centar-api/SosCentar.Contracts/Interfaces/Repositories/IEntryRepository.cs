using SosCentar.Domain.Models;

namespace SosCentar.Contracts.Interfaces.Repositories
{
	public interface IEntryRepository
	{
		public void Create(Entry entry);
	}
}
