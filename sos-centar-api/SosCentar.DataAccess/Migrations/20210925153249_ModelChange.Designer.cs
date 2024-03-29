﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using SosCentar.DataAccess;

namespace SosCentar.DataAccess.Migrations
{
    [DbContext(typeof(ReportContext))]
    [Migration("20210925153249_ModelChange")]
    partial class ModelChange
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("SosCentar.Domain.Models.Answer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int>("Order")
                        .HasColumnType("integer");

                    b.Property<Guid?>("QuestionId")
                        .HasColumnType("uuid");

                    b.Property<string>("Text")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("QuestionId");

                    b.ToTable("Answers");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Category", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<int>("Order")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Entry", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<DateTime>("Date")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<Guid?>("UserId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Entries");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Question", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<int>("Order")
                        .HasColumnType("integer");

                    b.Property<Guid?>("SectionId")
                        .HasColumnType("uuid");

                    b.Property<string>("Text")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("SectionId");

                    b.ToTable("Questions");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.QuestionCondition", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid>("AnswerId")
                        .HasColumnType("uuid");

                    b.Property<Guid>("QuestionId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("QuestionId")
                        .IsUnique();

                    b.ToTable("QuestionConditions");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Section", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("CategoryId")
                        .HasColumnType("uuid");

                    b.Property<int>("Order")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Sections");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.SubmitedAnswer", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<Guid?>("AnswerId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("EntryId")
                        .HasColumnType("uuid");

                    b.Property<Guid?>("QuestionId")
                        .HasColumnType("uuid");

                    b.HasKey("Id");

                    b.HasIndex("AnswerId");

                    b.HasIndex("EntryId");

                    b.HasIndex("QuestionId");

                    b.ToTable("SubmitedAnswers");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Answer", b =>
                {
                    b.HasOne("SosCentar.Domain.Models.Question", null)
                        .WithMany("Answers")
                        .HasForeignKey("QuestionId");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Entry", b =>
                {
                    b.HasOne("SosCentar.Domain.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("User");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Question", b =>
                {
                    b.HasOne("SosCentar.Domain.Models.Section", null)
                        .WithMany("Questions")
                        .HasForeignKey("SectionId");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.QuestionCondition", b =>
                {
                    b.HasOne("SosCentar.Domain.Models.Question", null)
                        .WithOne("QuestionCondition")
                        .HasForeignKey("SosCentar.Domain.Models.QuestionCondition", "QuestionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Section", b =>
                {
                    b.HasOne("SosCentar.Domain.Models.Category", null)
                        .WithMany("Sections")
                        .HasForeignKey("CategoryId");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.SubmitedAnswer", b =>
                {
                    b.HasOne("SosCentar.Domain.Models.Answer", "Answer")
                        .WithMany()
                        .HasForeignKey("AnswerId");

                    b.HasOne("SosCentar.Domain.Models.Entry", null)
                        .WithMany("SubmitedAnswers")
                        .HasForeignKey("EntryId");

                    b.HasOne("SosCentar.Domain.Models.Question", "Question")
                        .WithMany()
                        .HasForeignKey("QuestionId");

                    b.Navigation("Answer");

                    b.Navigation("Question");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Category", b =>
                {
                    b.Navigation("Sections");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Entry", b =>
                {
                    b.Navigation("SubmitedAnswers");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Question", b =>
                {
                    b.Navigation("Answers");

                    b.Navigation("QuestionCondition");
                });

            modelBuilder.Entity("SosCentar.Domain.Models.Section", b =>
                {
                    b.Navigation("Questions");
                });
#pragma warning restore 612, 618
        }
    }
}
