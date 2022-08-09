using System;
using System.IO;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SosCentar.DataAccess.Migrations
{
    public partial class AddMultipleAnswers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "MultipleAnswers",
                table: "Questions",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            var sqlMultipleAnswers = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"data/seed-multipleAnswers.sql");
            migrationBuilder.Sql(File.ReadAllText(sqlMultipleAnswers));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MultipleAnswers",
                table: "Questions");
        }
    }
}
