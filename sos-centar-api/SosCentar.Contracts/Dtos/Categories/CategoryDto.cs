using SosCentar.Contracts.Dtos.Sections;

namespace SosCentar.Contracts.Dtos.Categories
{
	public class CategoryDto
	{
		public SectionDto CallerInfo { get; set; }
		public SectionDto ServiceInfo { get; set; }
		public SectionDto ActionInfoInfo { get; set; }
	}
}
