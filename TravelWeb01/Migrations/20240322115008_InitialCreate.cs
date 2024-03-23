using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TravelWeb01.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Members",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MberName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MberAccount = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MberPassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MberEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MberPhone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MberBirthday = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Members", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Members");
        }
    }
}
