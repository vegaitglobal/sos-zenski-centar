using SosCentar.Domain.Models;
using System;
using System.Collections.Generic;

namespace SosCentar.Contracts.Interfaces.Services
{
	public interface IQuestionService
	{
		public Question GetById(Guid id);
		public IEnumerable<Question> GetByName(string name);
	}
}
