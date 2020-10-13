using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore;
using ReactCarsTable_TwoPlusPages.Data;

namespace ReactCarsTable_TwoPlusPages.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connStr;
        public PeopleController(IConfiguration configuration)
        {
            _connStr = configuration.GetConnectionString("ConStr");
        }

        [Route("GetAllPeople")]
        public List<Person> GetAllPeople()
        {
            PeopleCarsManager pcm = new PeopleCarsManager(_connStr);
            List<Person> people =  pcm.GetAllPeople();
            return people;
        }

        [Route("GetAllCarsForPerson")]
        public IEnumerable<Car> GetAllCarsForPerson(int personId)
        {
            PeopleCarsManager pcm = new PeopleCarsManager(_connStr);
            return pcm.GetAllCarsForPerson(personId);
        }

        [Route("AddPerson")]
        [HttpPost]
        public void AddPerson(Person p)
        {
            PeopleCarsManager pcm = new PeopleCarsManager(_connStr);
            pcm.AddPerson(p);
        }

        [Route("AddCarForPerson")]
        [HttpPost]
        public void AddCarForPerson(Car c)
        {
            PeopleCarsManager pcm = new PeopleCarsManager(_connStr);
             pcm.AddCarForPerson(c);
        }

        [Route("DeleteCars")]
        [HttpPost]
        public void DeleteCars(Person person)
        {
            PeopleCarsManager pcm = new PeopleCarsManager(_connStr);
            pcm.deleteCarsForPerson(person.Id);
        }

        [Route("GetPersonForId")]
        public Person GetPersonForId (int id)
        {
            PeopleCarsManager pcm = new PeopleCarsManager(_connStr);
            return pcm.GetPersonForId(id);
        }
    }
}