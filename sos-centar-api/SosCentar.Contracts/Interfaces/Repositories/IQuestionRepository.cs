using SosCentar.Domain.Models;
using System;

namespace SosCentar.Contracts.Interfaces.Repositories
{
	public interface IQuestionRepository
	{
		public Question GetById(Guid id);
	}
}
