using System;
using System.IO;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SosCentar.DataAccess.Migrations
{
    public partial class MakeConditionalAnswerNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "AnswerId",
                table: "QuestionConditions",
                type: "uuid",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "uuid");
            
            var answersNasilje = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"data/seed-answers.sql");
            migrationBuilder.Sql(File.ReadAllText(answersNasilje));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "AnswerId",
                table: "QuestionConditions",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "uuid",
                oldNullable: true);
        }
    }
}
