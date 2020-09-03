﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using ReactCarsTable_TwoPlusPages.Data;

namespace ReactCarsTable_TwoPlusPages.Data.Migrations
{
    [DbContext(typeof(DataBaseContext))]
    [Migration("20200903092902_change")]
    partial class change
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ReactCarsTable_TwoPlusPages.Data.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Make");

                    b.Property<string>("Model");

                    b.Property<int>("PersonId");

                    b.Property<int>("Year");

                    b.HasKey("Id");

                    b.HasIndex("PersonId");

                    b.ToTable("cars");
                });

            modelBuilder.Entity("ReactCarsTable_TwoPlusPages.Data.Person", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<int>("age");

                    b.HasKey("Id");

                    b.ToTable("people");
                });

            modelBuilder.Entity("ReactCarsTable_TwoPlusPages.Data.Car", b =>
                {
                    b.HasOne("ReactCarsTable_TwoPlusPages.Data.Person", "Person")
                        .WithMany("Cars")
                        .HasForeignKey("PersonId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
