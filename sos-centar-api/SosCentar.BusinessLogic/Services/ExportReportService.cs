using NPOI.XWPF.UserModel;
using SosCentar.Contracts.Dtos.ReportTables;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.IO;
using System.Linq;

namespace SosCentar.BusinessLogic.Services
{
    public class ExportReportService : IExportReportService
    {
        private readonly IExportPreparationService _exportPreparationService;

        public ExportReportService(IExportPreparationService exportPreparationService)
        {
            _exportPreparationService = exportPreparationService;
        }

        public byte[] CreateExportFile(DateTime from, DateTime to)
        {
            XWPFDocument doc = new XWPFDocument();

            XWPFParagraph para0 = doc.CreateParagraph();
            XWPFRun r0 = para0.CreateRun();
            r0.SetText("1. Opšti podaci");

            var usersCountCategory = _exportPreparationService
                .GetUsersCountPerCategory(from, to, "1.1. Broj korisnika/ca po uslugama");
            InsertOneBullet(doc, usersCountCategory);

            var usersCountPerSexPerCategory = _exportPreparationService
                .GetReportPerAnswerOnQuestionPerCategory(from, to, "1.2. Broj korisnika/ca po polu", "Pol");
            InsertOneBullet(doc, usersCountPerSexPerCategory);

            var usersCountPerAgePerCategory = _exportPreparationService
                .GetReportPerAnswerOnQuestionPerCategory(from, to, "1.3. Broj korisnika/ca po uzrastu", "Uzrast");
            InsertOneBullet(doc, usersCountPerAgePerCategory);

            var usersCountPerMarginalizedGroup = _exportPreparationService
                .GetReportPerAnswerOnQuestion(from, to, "1.4. Broj klijenata i klijentkinja  iz marginalizovanih grupa", "Pripadnost marginalizovanim grupama", true);
            InsertOneBullet(doc, usersCountPerMarginalizedGroup);

            MemoryStream outStream = new MemoryStream();
            doc.Write(outStream);

            return outStream.ToArray();
        }

        private static void InsertOneBullet(XWPFDocument doc, ExportTableDto tableData)
        {
            XWPFParagraph paragraph = doc.CreateParagraph();
            XWPFRun run = paragraph.CreateRun();
            run.SetText(tableData.Title);
            InsertTable(doc, tableData);
        }

        private static void InsertTable(XWPFDocument doc, ExportTableDto tableData)
        {
            var rowCount = tableData.Data.Count() + 1;
            var colCount = tableData.Headings.Count();

            if (rowCount == 0 || colCount == 0)
            {
                return;
            }

            XWPFTable table = doc.CreateTable(rowCount, colCount);

            var colIndex = 0;
            foreach (var heading in tableData.Headings)
            {
                table.GetRow(0).GetCell(colIndex).SetText(heading);
                colIndex++;
            }

            var rowIndex = 1;
            foreach (var dataRow in tableData.Data)
            {
                colIndex = 0;
                foreach (var dataCell in dataRow)
                {
                    table.GetRow(rowIndex).GetCell(colIndex).SetText(dataCell);
                    colIndex++;
                }
                rowIndex++;
            }
        }
    }
}
