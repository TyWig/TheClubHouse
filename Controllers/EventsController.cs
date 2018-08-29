using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TheClubHouse.Controllers
{
    [Route("api/[controller]")]
    public class EventsController : Controller
    {
        private Random rand = new Random();
        private string[] titles = {"Title 1", "Testing 2", "Title 69", "Event 45", "Something About Events"};

        [HttpGet]
        public List<Event> Get()
        {
            var list = new List<Event>();
            for(int i = 0; i < 5; i++) {
                list.Add(GenerateEvent(i));
            }
            return list;
        }

        private Event GenerateEvent(int index)
        {
            return new Event
            {
                id = this.rand.Next(10000).ToString(),
                title = titles[this.rand.Next(titles.Length-1)],
                allDay = this.rand.NextDouble() > 0.5 ? true : false,
                start = DateTime.Now.AddDays(index),
                end = null
            };
        }

        public class Event
        {
            public string id {get;set;}
            public string title {get;set;}
            public bool allDay {get;set;}
            public DateTime start {get;set;}
            public DateTime? end {get;set;}
        }
    }
}