using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ADSUna.LAI.Portal.Web.Migrations.DBAccess
{
    public partial class CommunityPost : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CommunityPost",
                columns: table => new
                {
                    PostId = table.Column<string>(nullable: false, defaultValueSql: "newid()"),
                    PostCreatedDate = table.Column<DateTime>(nullable: false),
                    PostTitle = table.Column<string>(nullable: true),
                    PostContent = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommunityPost", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_CommunityPost_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CommunityPostLikes",
                columns: table => new
                {
                    IdReaction = table.Column<string>(nullable: false),
                    PostId = table.Column<string>(nullable: true),
                    ReactionDate = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommunityPostLikes", x => x.IdReaction);
                    table.ForeignKey(
                        name: "FK_CommunityPostLikes_CommunityPost_PostId",
                        column: x => x.PostId,
                        principalTable: "CommunityPost",
                        principalColumn: "PostId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CommunityPostLikes_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CommunityPost_UserId",
                table: "CommunityPost",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_CommunityPostLikes_PostId",
                table: "CommunityPostLikes",
                column: "PostId");

            migrationBuilder.CreateIndex(
                name: "IX_CommunityPostLikes_UserId",
                table: "CommunityPostLikes",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CommunityPostLikes");

            migrationBuilder.DropTable(
                name: "CommunityPost");
        }
    }
}
