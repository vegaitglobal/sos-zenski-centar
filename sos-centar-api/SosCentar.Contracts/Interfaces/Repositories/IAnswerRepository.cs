using SosCentar.Domain.Models;
using System;

namespace SosCentar.Contracts.Interfaces.Repositories
{
	public interface IAnswerRepository
	{
		public Answer GetById(Guid id);
	}
}
