using SosCentar.Contracts.Dtos.Sections;
using System;

namespace SosCentar.Contracts.Dtos.Categories
{
    public class CategoryDto
    {
        public Guid Id { get; set; }
        public SectionDto CallerInfo { get; set; }
        public SectionDto ServiceInfo { get; set; }
        public SectionDto ActionInfoInfo { get; set; }
    }
}
