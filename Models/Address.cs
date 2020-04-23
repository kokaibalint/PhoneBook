using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace PhoneBook.Models
{
    public class Address
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string SurName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        public int PhoneNum { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string CityAddress { get; set; }
    }
}
