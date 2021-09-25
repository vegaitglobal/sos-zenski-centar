using SosCentar.Contracts.Interfaces.Services;
using SosCentar.DataAccess;
using SosCentar.Domain.Models;
using System;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
	public class AnswerService : IAnswerService
	{
		private readonly ReportContext _reportContext;

		public AnswerService(ReportContext reportContext)
		{
			_reportContext = reportContext;
		}

		public Answer GetById(Guid id)
		{
			return _reportContext.Answers.FirstOrDefault(answer => answer.Id == id);
		}
	}
}
