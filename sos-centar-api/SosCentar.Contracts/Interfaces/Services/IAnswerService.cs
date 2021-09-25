using SosCentar.Domain.Models;
using System;

namespace SosCentar.Contracts.Interfaces.Services
{
	public interface IAnswerService
	{
		public Answer GetById(Guid id);
	}
}
