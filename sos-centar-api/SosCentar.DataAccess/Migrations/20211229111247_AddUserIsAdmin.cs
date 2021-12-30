using System;
using System.IO;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SosCentar.DataAccess.Migrations
{
    public partial class AddUserIsAdmin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsAdmin",
                table: "Users",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            var sqlUser = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"data/seed-users.sql");
            migrationBuilder.Sql(File.ReadAllText(sqlUser));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsAdmin",
                table: "Users");
        }
    }
}
