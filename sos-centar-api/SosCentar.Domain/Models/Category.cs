using System;
using System.Collections.Generic;

namespace SosCentar.Domain.Models
{
    public class Category
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public IEnumerable<Section> Sections { get; set; }
        public int Order { get; set; }
    }
}
