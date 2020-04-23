using Microsoft.EntityFrameworkCore;
using PhoneBook.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PhoneBook.DataAccess
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions options) : base(options) {}

        public DbSet<User> User { get; set; }

        public DbSet<Address> Addresses { get; set; }
    }
}
