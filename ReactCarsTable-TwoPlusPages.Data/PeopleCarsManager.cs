using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ReactCarsTable_TwoPlusPages.Data
{
    public class PeopleCarsManager
    {
        private string _connectionString;

        public PeopleCarsManager(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Person> GetAllPeople()
        {
            DataBaseContext db = new DataBaseContext(_connectionString);
            return db.people.Include(p => p.Cars).ToList();
        }
        public void AddPerson(Person p)
        {
            DataBaseContext db = new DataBaseContext(_connectionString);
            db.people.Add(p);
            db.SaveChanges();
        }
        public IEnumerable<Car> GetAllCarsForPerson(int personId)
        {
            DataBaseContext db = new DataBaseContext(_connectionString);
            return db.cars.Where(c => c.PersonId == personId);
        }

        public void deleteCarsForPerson(int personId)
        {
            DataBaseContext db = new DataBaseContext(_connectionString);
            db.cars.RemoveRange(db.cars.Where(c => c.PersonId == personId));
            db.SaveChanges();
        }

        public void AddCarForPerson(Car c)
        {
            DataBaseContext db = new DataBaseContext(_connectionString);                   
            db.cars.Add(c);
            db.SaveChanges();
           
        }

        public Person GetPersonForId (int id)
        {
            DataBaseContext db = new DataBaseContext(_connectionString);
            return db.people.FirstOrDefault(p => p.Id == id);
        }
    }
}
