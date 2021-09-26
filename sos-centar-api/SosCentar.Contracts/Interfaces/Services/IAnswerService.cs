using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Services
{
	public interface IAnswerService
	{
		public Answer GetById(Guid id);
		public IEnumerable<Guid> GetAllIdsForQuestion(Question question);
	}
}
