using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LearnCode.Data.Migrations
{
    public partial class initialmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "learncode");

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AuthorItem",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    TutorialId = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Intro = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AuthorItem", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EducationItem",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false),
                    Institution = table.Column<string>(nullable: true),
                    Education = table.Column<string>(nullable: true),
                    YearOfGraduation = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EducationItem", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SubscriptionStatus",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Subscription = table.Column<string>(nullable: true),
                    Price = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SubscriptionStatus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TrophyItem",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Trophy = table.Column<string>(nullable: true),
                    AmountOfGoodReviews = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TrophyItem", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "learncode",
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    PushNotificationToken = table.Column<string>(nullable: true),
                    DisplayName = table.Column<string>(nullable: true),
                    Intro = table.Column<string>(nullable: true),
                    Avatar = table.Column<string>(nullable: true),
                    Occupation = table.Column<string>(nullable: true),
                    EducationId = table.Column<Guid>(nullable: true),
                    ProgrammingExperience = table.Column<int>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    TrophyId = table.Column<Guid>(nullable: true),
                    SubscriptionStatusId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_TrophyItem_TrophyId",
                        column: x => x.TrophyId,
                        principalSchema: "learncode",
                        principalTable: "TrophyItem",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_EducationItem_EducationId",
                        column: x => x.EducationId,
                        principalSchema: "learncode",
                        principalTable: "EducationItem",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_SubscriptionStatus_SubscriptionStatusId",
                        column: x => x.SubscriptionStatusId,
                        principalSchema: "learncode",
                        principalTable: "SubscriptionStatus",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                schema: "learncode",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                schema: "learncode",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalSchema: "learncode",
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                schema: "learncode",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FavoriteTutorial",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Link = table.Column<string>(nullable: true),
                    Title = table.Column<string>(nullable: true),
                    Subject = table.Column<string>(nullable: true),
                    StudentId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FavoriteTutorial", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FavoriteTutorial_AspNetUsers_StudentId",
                        column: x => x.StudentId,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ProgrammingLanguages",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    EducatorId = table.Column<string>(nullable: true),
                    LearnCodeUserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProgrammingLanguages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProgrammingLanguages_AspNetUsers_EducatorId",
                        column: x => x.EducatorId,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ProgrammingLanguages_AspNetUsers_LearnCodeUserId",
                        column: x => x.LearnCodeUserId,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "StripePayment",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Token = table.Column<string>(nullable: true),
                    Amount = table.Column<double>(nullable: false),
                    CardHolderName = table.Column<string>(nullable: true),
                    AddressLine1 = table.Column<string>(nullable: true),
                    AddressLine2 = table.Column<string>(nullable: true),
                    AddressCity = table.Column<string>(nullable: true),
                    AddressPostCode = table.Column<string>(nullable: true),
                    AddressCountry = table.Column<string>(nullable: true),
                    EducatorId = table.Column<string>(nullable: true),
                    StudentId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StripePayment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StripePayment_AspNetUsers_EducatorId",
                        column: x => x.EducatorId,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_StripePayment_AspNetUsers_StudentId",
                        column: x => x.StudentId,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Tutorials",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Subject = table.Column<string>(nullable: true),
                    SkillLevel = table.Column<string>(nullable: true),
                    AuthorId = table.Column<Guid>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    DateUpdated = table.Column<DateTime>(nullable: false),
                    EducatorId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tutorials", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tutorials_AuthorItem_AuthorId",
                        column: x => x.AuthorId,
                        principalSchema: "learncode",
                        principalTable: "AuthorItem",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Tutorials_AspNetUsers_EducatorId",
                        column: x => x.EducatorId,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Fee",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    UserId = table.Column<Guid>(nullable: false),
                    Amount = table.Column<double>(nullable: false),
                    Type = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    StripePaymentId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fee", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Fee_StripePayment_StripePaymentId",
                        column: x => x.StripePaymentId,
                        principalSchema: "learncode",
                        principalTable: "StripePayment",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Criticism",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    TutorialId = table.Column<Guid>(nullable: true),
                    EducatorId = table.Column<Guid>(nullable: true),
                    AuthorId = table.Column<Guid>(nullable: true),
                    Body = table.Column<string>(nullable: true),
                    Rating = table.Column<double>(nullable: false),
                    EducatorId1 = table.Column<string>(nullable: true),
                    TutorialItemId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Criticism", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Criticism_AuthorItem_AuthorId",
                        column: x => x.AuthorId,
                        principalSchema: "learncode",
                        principalTable: "AuthorItem",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Criticism_AspNetUsers_EducatorId1",
                        column: x => x.EducatorId1,
                        principalSchema: "learncode",
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Criticism_Tutorials_TutorialItemId",
                        column: x => x.TutorialItemId,
                        principalSchema: "learncode",
                        principalTable: "Tutorials",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TagItem",
                schema: "learncode",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    TutorialId = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    TutorialItemId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TagItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TagItem_Tutorials_TutorialItemId",
                        column: x => x.TutorialItemId,
                        principalSchema: "learncode",
                        principalTable: "Tutorials",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                schema: "learncode",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                schema: "learncode",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                schema: "learncode",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                schema: "learncode",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                schema: "learncode",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_TrophyId",
                schema: "learncode",
                table: "AspNetUsers",
                column: "TrophyId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_EducationId",
                schema: "learncode",
                table: "AspNetUsers",
                column: "EducationId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_Email",
                schema: "learncode",
                table: "AspNetUsers",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                schema: "learncode",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                schema: "learncode",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_SubscriptionStatusId",
                schema: "learncode",
                table: "AspNetUsers",
                column: "SubscriptionStatusId");

            migrationBuilder.CreateIndex(
                name: "IX_Criticism_AuthorId",
                schema: "learncode",
                table: "Criticism",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Criticism_EducatorId1",
                schema: "learncode",
                table: "Criticism",
                column: "EducatorId1");

            migrationBuilder.CreateIndex(
                name: "IX_Criticism_TutorialItemId",
                schema: "learncode",
                table: "Criticism",
                column: "TutorialItemId");

            migrationBuilder.CreateIndex(
                name: "IX_FavoriteTutorial_StudentId",
                schema: "learncode",
                table: "FavoriteTutorial",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_Fee_StripePaymentId",
                schema: "learncode",
                table: "Fee",
                column: "StripePaymentId");

            migrationBuilder.CreateIndex(
                name: "IX_ProgrammingLanguages_EducatorId",
                schema: "learncode",
                table: "ProgrammingLanguages",
                column: "EducatorId");

            migrationBuilder.CreateIndex(
                name: "IX_ProgrammingLanguages_LearnCodeUserId",
                schema: "learncode",
                table: "ProgrammingLanguages",
                column: "LearnCodeUserId");

            migrationBuilder.CreateIndex(
                name: "IX_StripePayment_EducatorId",
                schema: "learncode",
                table: "StripePayment",
                column: "EducatorId");

            migrationBuilder.CreateIndex(
                name: "IX_StripePayment_StudentId",
                schema: "learncode",
                table: "StripePayment",
                column: "StudentId");

            migrationBuilder.CreateIndex(
                name: "IX_TagItem_TutorialItemId",
                schema: "learncode",
                table: "TagItem",
                column: "TutorialItemId");

            migrationBuilder.CreateIndex(
                name: "IX_Tutorials_AuthorId",
                schema: "learncode",
                table: "Tutorials",
                column: "AuthorId");

            migrationBuilder.CreateIndex(
                name: "IX_Tutorials_EducatorId",
                schema: "learncode",
                table: "Tutorials",
                column: "EducatorId");

            migrationBuilder.CreateIndex(
                name: "IX_Tutorials_Title",
                schema: "learncode",
                table: "Tutorials",
                column: "Title",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "Criticism",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "FavoriteTutorial",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "Fee",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "ProgrammingLanguages",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "TagItem",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "AspNetRoles",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "StripePayment",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "Tutorials",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "AuthorItem",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "AspNetUsers",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "TrophyItem",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "EducationItem",
                schema: "learncode");

            migrationBuilder.DropTable(
                name: "SubscriptionStatus",
                schema: "learncode");
        }
    }
}
