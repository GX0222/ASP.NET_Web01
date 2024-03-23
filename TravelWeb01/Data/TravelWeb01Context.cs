using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TravelWeb01.Models;

namespace TravelWeb01.Data
{
    public class TravelWeb01Context : DbContext
    {
        public TravelWeb01Context (DbContextOptions<TravelWeb01Context> options)
            : base(options)
        {
        }

        public DbSet<TravelWeb01.Models.Members> Members { get; set; } = default!;
    }
}
