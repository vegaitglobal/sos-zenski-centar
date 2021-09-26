using NPOI.XWPF.UserModel;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.IO;

namespace SosCentar.BusinessLogic.Services
{
    public class ExportReportService : IExportReportService
    {
        private readonly IExportPreparationService _exportPreparationService;

        public ExportReportService(IExportPreparationService exportPreparationService)
        {
            _exportPreparationService = exportPreparationService;
        }

        public byte[] CreateDemoFile(DateTime from, DateTime to)
        {
            XWPFDocument doc = new XWPFDocument();

            XWPFParagraph para0 = doc.CreateParagraph();
            XWPFRun r0 = para0.CreateRun();
            r0.SetText("1. Opšti podaci");

            var usersCountCategory = _exportPreparationService.GetUsersCountCategory(from, to);
            InsertOneBullet(doc, usersCountCategory, "1.1. Broj korisnika/ca po uslugama");

            var usersCountPerSexPerCategory = _exportPreparationService.GetUsersCountPerSexPerCategory(from, to);
            InsertOneBullet(doc, usersCountPerSexPerCategory, "1.2. Broj korisnika/ca po polu");

            var usersCountPerAgePerCategory = _exportPreparationService.GetUsersCountPerAgePerCategory(from, to);
            InsertOneBullet(doc, usersCountPerAgePerCategory, "1.3. Broj korisnika/ca po uzrastu");

            //var usersCountPerMarginalizedGroup = _exportPreparationService.GetUsersCountPerMarginalizedGroup(from, to);
            //InsertOneBullet(doc, usersCountPerMarginalizedGroup, "1.4. Broj klijenata i klijentkinja  iz marginalizovanih grupa");

            MemoryStream outStream = new MemoryStream();
            doc.Write(outStream);

            return outStream.ToArray();
        }

        private static void InsertOneBullet(XWPFDocument doc, string[,] usersCountCategory, string usersCountCategoryBullet)
        {
            XWPFParagraph para1 = doc.CreateParagraph();
            XWPFRun r1 = para1.CreateRun();
            r1.SetText(usersCountCategoryBullet);
            InsertTable(doc, usersCountCategory);
        }

        private static void InsertTable(XWPFDocument doc, string[,] data)
        {
            var rowCount = data.GetLength(0);
            var colCount = data.GetLength(1);

            if (rowCount == 0 || colCount == 0)
            {
                return;
            }

            XWPFTable table = doc.CreateTable(rowCount, colCount);

            for (var rowIndex = 0; rowIndex < rowCount; rowIndex++)
            {
                for (var colIndex = 0; colIndex < colCount; colIndex++)
                {
                    table.GetRow(rowIndex).GetCell(colIndex).SetText(data[rowIndex, colIndex]);
                }
            }
        }
    }
}
