using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Domain.Models;

namespace SosCentar.DataAccess.Repositories
{
	public class EntryRepository : IEntryRepository
	{
		private readonly ReportContext _reportContext;

		public EntryRepository(ReportContext reportContext)
		{
			_reportContext = reportContext;
		}

		public void Create(Entry entry)
		{
			_reportContext.Entries.Add(entry);
			_reportContext.SaveChanges();
		}
	}
}
