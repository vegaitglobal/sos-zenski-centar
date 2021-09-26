using NPOI.XWPF.UserModel;
using SosCentar.Contracts.Interfaces.Services;
using System.IO;

namespace SosCentar.BusinessLogic.Services
{
    public class ExportReportService : IExportReportService
    {
        public byte[] CreateDemoFile()
        {
            XWPFDocument doc = new XWPFDocument();

            XWPFParagraph para = doc.CreateParagraph();
            XWPFRun r0 = para.CreateRun();
            r0.SetText("1. Opšti podaci");
            r0.set

            XWPFTable table = doc.CreateTable(3, 3);

            table.GetRow(1).GetCell(1).SetText("EXAMPLE OF TABLE");

            XWPFTableCell c1 = table.GetRow(0).GetCell(0);
            XWPFParagraph p1 = c1.AddParagraph();   //don't use doc.CreateParagraph
            XWPFRun r1 = p1.CreateRun();
            r1.SetText("The quick brown fox");

            r1.FontFamily = "Courier";
            r1.SetUnderline(UnderlinePatterns.DotDotDash);
            c1.SetColor("FF0000");


            table.GetRow(2).GetCell(2).SetText("only text");


            MemoryStream out1 = new MemoryStream();
            doc.Write(out1);


            return out1.ToArray();
        }
    }
}
