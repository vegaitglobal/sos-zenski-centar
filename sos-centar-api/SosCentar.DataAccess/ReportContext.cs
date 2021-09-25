using Microsoft.EntityFrameworkCore;
using SosCentar.Domain.Models;

namespace SosCentar.DataAccess
{
	public class ReportContext : DbContext
	{
		public ReportContext(DbContextOptions options) : base(options)
		{
		}

		public DbSet<Category> Categories { get; set; }
		public DbSet<Answer> Answers { get; set; }
		public DbSet<Question> Questions { get; set; }
		public DbSet<Entry> Entries { get; set; }
		public DbSet<SubmitedAnswer> SubmitedAnswers { get; set; }
		public DbSet<User> Users { get; set; }
		public DbSet<Section> Sections { get; set; }
		public DbSet<QuestionCondition> QuestionConditions { get; set; }

	}
}
