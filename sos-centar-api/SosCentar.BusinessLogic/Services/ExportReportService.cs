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

            XWPFParagraph para0 = doc.CreateParagraph();
            XWPFRun r0 = para0.CreateRun();
            r0.SetText("1. Opšti podaci");

            XWPFParagraph para1 = doc.CreateParagraph();
            XWPFRun r1 = para1.CreateRun();
            r1.SetText("1.1. Broj korisnika/ca po uslugama");
            XWPFTable table1 = doc.CreateTable(2, 2);
            table1.GetRow(0).GetCell(0).SetText("0 0");
            table1.GetRow(0).GetCell(1).SetText("0 1");
            table1.GetRow(1).GetCell(0).SetText("1 0");
            table1.GetRow(1).GetCell(1).SetText("1 1");

            XWPFParagraph para2 = doc.CreateParagraph();
            XWPFRun r2 = para2.CreateRun();
            r2.SetText("1.2. Broj korisnika/ca po polu");
            XWPFTable table2 = doc.CreateTable(2, 2);
            table2.GetRow(0).GetCell(0).SetText("0 0");
            table2.GetRow(0).GetCell(1).SetText("0 1");
            table2.GetRow(1).GetCell(0).SetText("1 0");
            table2.GetRow(1).GetCell(1).SetText("1 1");

            XWPFParagraph para3 = doc.CreateParagraph();
            XWPFRun r3 = para3.CreateRun();
            r3.SetText("1.3. Broj korisnika/ca po uzrastu");
            XWPFTable table3 = doc.CreateTable(2, 2);
            table3.GetRow(0).GetCell(0).SetText("0 0");
            table3.GetRow(0).GetCell(1).SetText("0 1");
            table3.GetRow(1).GetCell(0).SetText("1 0");
            table3.GetRow(1).GetCell(1).SetText("1 1");

            XWPFParagraph para4 = doc.CreateParagraph();
            XWPFRun r4 = para4.CreateRun();
            r4.SetText("1.4. Broj klijenata i klijentkinja  iz marginalizovanih grupa");
            XWPFTable table4 = doc.CreateTable(2, 2);
            table4.GetRow(0).GetCell(0).SetText("0 0");
            table4.GetRow(0).GetCell(1).SetText("0 1");
            table4.GetRow(1).GetCell(0).SetText("1 0");
            table4.GetRow(1).GetCell(1).SetText("1 1");


            MemoryStream outStream = new MemoryStream();
            doc.Write(outStream);
            return outStream.ToArray();
        }
    }
}
