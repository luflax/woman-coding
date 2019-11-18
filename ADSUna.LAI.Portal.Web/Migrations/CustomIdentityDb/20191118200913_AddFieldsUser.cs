using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ADSUna.LAI.Portal.Web.Migrations.CustomIdentityDb
{
    public partial class AddFieldsUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.AddColumn<string>(name: "JobTitle", table: "AspNetUsers", type: "varchar", maxLength: 50, nullable: true);
            migrationBuilder.AddColumn<string>(name: "FullName", table: "AspNetUsers", type: "varchar", maxLength: 50, nullable: true);
            migrationBuilder.AddColumn<string>(name: "City", table: "AspNetUsers", type: "varchar", maxLength: 50, nullable: true);
            migrationBuilder.AddColumn<string>(name: "AboutMe", table: "AspNetUsers", type: "varchar", maxLength: 1000, nullable: true);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
