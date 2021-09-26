using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Repositories
{
	public interface IQuestionRepository
	{
		public Question GetById(Guid id);
		public IEnumerable<Question> GetByName(string name);
	}
}
