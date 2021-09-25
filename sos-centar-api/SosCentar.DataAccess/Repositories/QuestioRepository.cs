using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Domain.Models;
using System;
using System.Linq;

namespace SosCentar.DataAccess.Repositories
{
	public class QuestioRepository : IQuestionRepository
	{
        private readonly ReportContext _reportContext;

		public QuestioRepository(ReportContext reportContext)
		{
			_reportContext = reportContext;
		}

		public Question GetById(Guid id)
		{
			return _reportContext.Questions.FirstOrDefault(question => question.Id == id);
		}
	}
}
