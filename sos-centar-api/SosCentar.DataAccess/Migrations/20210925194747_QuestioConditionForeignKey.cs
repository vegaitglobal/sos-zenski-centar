using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SosCentar.DataAccess.Migrations
{
    public partial class QuestioConditionForeignKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Sections",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "QuestionIdMaster",
                table: "QuestionConditions",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Sections");

            migrationBuilder.DropColumn(
                name: "QuestionIdMaster",
                table: "QuestionConditions");
        }
    }
}
