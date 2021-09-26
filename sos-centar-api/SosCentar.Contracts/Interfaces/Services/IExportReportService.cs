using NPOI.XWPF.UserModel;
using System.IO;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IExportReportService
    {
        byte[] CreateDemoFile(System.DateTime from, System.DateTime to);
    }
}
