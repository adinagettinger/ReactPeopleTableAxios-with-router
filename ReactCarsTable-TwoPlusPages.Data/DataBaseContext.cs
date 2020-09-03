using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace ReactCarsTable_TwoPlusPages.Data
{
    public class DataBaseContext : DbContext
    {
        private string _connectionString;

        public DataBaseContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder ob)
        {
            ob.UseSqlServer(_connectionString);
        }

        

        public DbSet<Person> people { get; set; }
        public DbSet<Car> cars { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>()
                .HasMany(p => p.Cars)
                .WithOne(c => c.Person)
                .IsRequired();
        }
    }
}
