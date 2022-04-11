using DinkToPdf;
using DinkToPdf.Contracts;
using Razor.Templating.Core;
using SosCentar.Contracts.Dtos.ReportTables;
using SosCentar.Contracts.Interfaces.Services;
using System;
using System.Collections.Generic;
using System.IO;

namespace SosCentar.BusinessLogic.Services
{
    public class ExportReportService : IExportReportService
    {
        private readonly IExportPreparationService _exportPreparationService;
        private readonly IConverter _converterPdf;

        public ExportReportService(IExportPreparationService exportPreparationService, IConverter converterPdf)
        {
            _exportPreparationService = exportPreparationService;
            _converterPdf = converterPdf;
        }

        public byte[] CreateExportFileByteArray(DateTime from, DateTime to)
        {
            var sections = new List<ExportSectionDto>();
            var exportReport = new ExportReportDto
            {
                Title = $"Pregled pruženih intervencija za period {from.ToShortDateString()} - {to.ToShortDateString()}",
                SubTitle = "Sos ženski centar",
                Sections = sections,
            };

            sections.Add(GetSection1(from, to));
            sections.Add(GetSection2(from, to));
            sections.Add(GetSection3(from, to));
            sections.Add(GetSection4(from, to));
            sections.Add(GetSection5(from, to));
            sections.Add(GetSection6(from, to));

            return GeneratePdfByteArray(exportReport);
        }

        private ExportSectionDto GetSection1(DateTime from, DateTime to)
        {
            var sectionTables = new List<ExportTableDto>();

            var table1 = _exportPreparationService
                .GetUsersCountPerCategory(from, to, "1.1. Broj korisnika/ca po uslugama");
            sectionTables.Add(table1);

            var table2 = _exportPreparationService
                .GetReportPerAnswerOnQuestionPerCategory(from, to, "1.2. Broj korisnika/ca po polu", "Pol");
            sectionTables.Add(table2);

            var table3 = _exportPreparationService
                .GetReportPerAnswerOnQuestionPerCategory(from, to, "1.3. Broj korisnika/ca po uzrastu", "Uzrast");
            sectionTables.Add(table3);

            var table4 = _exportPreparationService
                .GetReportPerAnswerOnQuestion(from, to, "1.4. Broj klijenata i klijentkinja  iz marginalizovanih grupa", "Pripadnost marginalizovanim grupama", true);
            sectionTables.Add(table4);

            return new ExportSectionDto { Title = "1. Opšti podaci", Tables = sectionTables };
        }

        private ExportSectionDto GetSection2(DateTime from, DateTime to)
        {
            var sectionTables = new List<ExportTableDto>();

            var table1 = _exportPreparationService
                .GetReportPerAnswerOnQuestionPerCategory(from, to, "2.1. Broj klijentkinja i klijenata sa iskustvom nasilja po uslugama", "Da li postoji nasilje?");
            sectionTables.Add(table1);

            var table2 = _exportPreparationService
                 .GetReportPerAnswerOnQuestion(from, to, "2.2. Odnos žrtve sa nasilnikom", "Odnos sa nasilnikom");
            sectionTables.Add(table2);

            var table3 = _exportPreparationService
                 .GetReportPerAnswerOnQuestion(from, to, "2.3. Zastupljeni oblici nasilja", "Prisutni oblici nasilja");
            sectionTables.Add(table3);

            var table4 = _exportPreparationService
                 .GetReportPerAnswerOnQuestion(from, to, "2.4. Broj dece izloženih nasilju u odnosu na uzrast", "Uzrast deteta", true);
            sectionTables.Add(table4);

            return new ExportSectionDto { Title = "2. Obraćanje zbog nasilja - broj klijenata i klijentkinja", Tables = sectionTables };
        }

        private ExportSectionDto GetSection3(DateTime from, DateTime to)
        {
            var sectionTables = new List<ExportTableDto>();

            var table1 = _exportPreparationService
                .GetReportPerAnswerOnQuestion(from, to, "3.1. Da li postoji nasilje", "Da li postoji nasilje?", true);
            sectionTables.Add(table1);

            var table2 = _exportPreparationService
                 .GetReportPerAnswerOnQuestion(from, to, "3.2. Na koji SOS broj zove", "Na koji SOS broj zove?", true);
            sectionTables.Add(table2);

            return new ExportSectionDto { Title = "3. Evidencija poziva SOS telefona", Tables = sectionTables };
        }

        private ExportSectionDto GetSection4(DateTime from, DateTime to)
        {
            var sectionTables = new List<ExportTableDto>();

            var table1 = _exportPreparationService
                .GetReportPerAnswerOnQuestion(from, to, "4.1. Broj korisnika/ca po kanalu komunikacije", "Kanal komunikacije", true);
            sectionTables.Add(table1);

            var table2 = _exportPreparationService
                .GetReportPerAnswerOnQuestionPerOtherQuestion(from, to, "4.1. Broj interakcija po kanalu komunikacije", "Kanal komunikacije", "Broj ostvarenih interakcija");
            sectionTables.Add(table2);

            return new ExportSectionDto { Title = "4. Evidencija poruka 2021- Broj korisnika/ca i ostvaren broj interakcija", Tables = sectionTables };
        }

        private ExportSectionDto GetSection5(DateTime from, DateTime to)
        {
            var sectionTables = new List<ExportTableDto>();

            var table1 = _exportPreparationService
                .GetReportPerAnswerOnQuestion(from, to, "5.1.", "Pravne intervencije", true);
            sectionTables.Add(table1);

            return new ExportSectionDto { Title = "5. Pravna podrška i pomoć", Tables = sectionTables };
        }

        private ExportSectionDto GetSection6(DateTime from, DateTime to)
        {
            var sectionTables = new List<ExportTableDto>();

            var table1 = _exportPreparationService
                .GetReportPerAnswerOnQuestion(from, to, "6.1.", "Korisnica je dalje upućena:", true);
            sectionTables.Add(table1);

            return new ExportSectionDto { Title = "6. Upućivanje- Broj korisnika i korisnica", Tables = sectionTables };
        }

        public byte[] GeneratePdfByteArray(ExportReportDto exportReport)
        {
            var html = RazorTemplateEngine.RenderAsync("/ReportsTemplate.cshtml", exportReport).Result;

            var doc = new HtmlToPdfDocument()
            {
                GlobalSettings = {
                    ColorMode = ColorMode.Color,
                    Orientation = Orientation.Portrait,
                    PaperSize = PaperKind.A4Plus,
                    Margins = { Top = 20, Bottom = 20 },
                },
                Objects = {
                    new ObjectSettings() {
                        PagesCount = true,
                        HtmlContent = html,
                        WebSettings = { DefaultEncoding = "utf-8" },
                        FooterSettings = { FontSize = 8, Right = "[page]/[toPage]", Spacing = 1.8 }
                    }
                }
            };

            byte[] pdfByteArray = _converterPdf.Convert(doc);

            var outStream = new MemoryStream(pdfByteArray);

            return outStream.ToArray();
        }
    }
}
