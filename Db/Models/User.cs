using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheClubHouse.Db.Models
{
    public class User
    {
        public int Id { get; set; }
        public string IdentityId { get; set; }
        public AppUser Identity { get; set; }
        public string Location { get; set; }
    }
}
