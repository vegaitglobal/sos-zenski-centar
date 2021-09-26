using SosCentar.Domain.Models;
using System;

namespace SosCentar.Contracts.Interfaces.Services
{
	public interface IQuestionService
	{
		public Question GetById(Guid id);
		public Question GetByName(string name);
	}
}
