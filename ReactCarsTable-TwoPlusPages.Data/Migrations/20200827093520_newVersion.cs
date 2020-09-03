using Microsoft.EntityFrameworkCore.Migrations;

namespace ReactCarsTable_TwoPlusPages.Data.Migrations
{
    public partial class newVersion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "age",
                table: "people",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "age",
                table: "people");
        }
    }
}
