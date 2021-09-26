using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Repositories
{
	public interface IAnswerRepository
	{
		public Answer GetById(Guid id);
		public IEnumerable<Answer> GetAll();
	}
}
