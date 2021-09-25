using SosCentar.Contracts.Dtos.Entries;
using SosCentar.Contracts.Interfaces.Repositories;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SosCentar.BusinessLogic.Services
{
	public class EntryService : IEntryService
	{
		private readonly IUserService _userService;
		private readonly IQuestionService _questionService;

		public EntryService(IUserService userService, IQuestionService questionService)
		{
			_userService = userService;
			_questionService = questionService;
		}


		public void Create(SubmittedEntryDto submittedEntryDto, string userEmail)
		{
			var user = _userService.GetByEmail(userEmail);

		}
	}
}
