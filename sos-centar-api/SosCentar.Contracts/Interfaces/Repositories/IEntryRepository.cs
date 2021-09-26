using SosCentar.Domain.Models;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Repositories
{
	public interface IEntryRepository
	{
		public void Create(Entry entry);
		public IEnumerable<Entry> GetAll();
	}
}
