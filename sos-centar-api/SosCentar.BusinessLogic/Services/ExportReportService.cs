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

        public IEnumerable<ExportSectionDto> GetSections(DateTime from, DateTime to) => new List<ExportSectionDto>
        {
            GetSection1(from, to),
            GetSection2(from, to),
            GetSection3(from, to),
            GetSection4(from, to),
            GetSection5(from, to),
            GetSection6(from, to),
        };

        public byte[] CreateExportFileByteArray(DateTime from, DateTime to) => GeneratePdfByteArray(new ExportReportDto
        {
            Title = $"Pregled pruženih intervencija za period {from.ToShortDateString()} - {to.ToShortDateString()}",
            SubTitle = "Sos ženski centar",
            Sections = GetSections(from, to),
        });

        private ExportSectionDto GetSection1(DateTime from, DateTime to) => new()
        {
            Title = "1. Opšti podaci",
            Tables = new List<ExportTableDto>
            {
                _exportPreparationService.GetUsersCountPerCategory(from, to, "1.1. Broj korisnika/ca po uslugama"),
                _exportPreparationService.GetReportPerAnswerOnQuestionPerCategory(from, to, "1.2. Broj korisnika/ca po polu", "Pol"),
                _exportPreparationService.GetReportPerAnswerOnQuestionPerCategory(from, to, "1.3. Broj korisnika/ca po uzrastu", "Uzrast"),
                _exportPreparationService.GetReportPerAnswerOnQuestion(from, to, "1.4. Broj klijenata i klijentkinja  iz marginalizovanih grupa", "Pripadnost marginalizovanim grupama", true)
            }
        };

        private ExportSectionDto GetSection2(DateTime from, DateTime to) => new()
        {
            Title = "2. Obraćanje zbog nasilja - broj klijenata i klijentkinja",
            Tables = new List<ExportTableDto>
            {
                _exportPreparationService.GetReportPerAnswerOnQuestionPerCategory(from, to, "2.1. Broj klijentkinja i klijenata sa iskustvom nasilja po uslugama", "Da li postoji nasilje?"),
                _exportPreparationService.GetReportPerAnswerOnQuestion(from, to, "2.2. Odnos žrtve sa nasilnikom", "Odnos sa nasilnikom"),
                _exportPreparationService.GetReportPerAnswerOnQuestion(from, to, "2.3. Zastupljeni oblici nasilja", "Prisutni oblici nasilja"),
                _exportPreparationService.GetReportPerAnswerOnQuestion(from, to, "2.4. Broj dece izloženih nasilju u odnosu na uzrast", "Uzrast deteta", true)
            }
        };

        private ExportSectionDto GetSection3(DateTime from, DateTime to) => new()
        {
            Title = "3. Evidencija poziva SOS telefona",
            Tables = new List<ExportTableDto>
            {
                _exportPreparationService.GetReportPerAnswerOnQuestion(from, to, "3.1. Da li postoji nasilje", "Da li postoji nasilje?", true),
                _exportPreparationService.GetReportPerAnswerOnQuestion(from, to, "3.2. Na koji SOS broj zove", "Na koji SOS broj zove?", true)
            }
        };

        private ExportSectionDto GetSection4(DateTime from, DateTime to) => new()
        {
            Title = "4. Evidencija poruka - Broj korisnika/ca i ostvaren broj interakcija",
            Tables = new List<ExportTableDto>
            {
                _exportPreparationService.GetReportPerAnswerOnQuestion(from, to, "4.1. Broj korisnika/ca po kanalu komunikacije", "Kanal komunikacije", true),
                _exportPreparationService.GetReportPerAnswerOnQuestionPerOtherQuestion(from, to, "4.1. Broj interakcija po kanalu komunikacije", "Kanal komunikacije", "Broj ostvarenih interakcija")
            }
        };

        private ExportSectionDto GetSection5(DateTime from, DateTime to) => new()
        {
            Title = "5. Pravna podrška i pomoć",
            Tables = new List<ExportTableDto>
            {
                _exportPreparationService.GetReportPerAnswerOnQuestion(from, to, "5.1.", "Pravne intervencije", true)
            }
        };

        private ExportSectionDto GetSection6(DateTime from, DateTime to) => new()
        {
            Title = "6. Upućivanje- Broj korisnika i korisnica",
            Tables = new List<ExportTableDto>
            {
                _exportPreparationService.GetReportPerAnswerOnQuestion(from, to, "6.1.", "Korisnica je dalje upućena:", true)
            }
        };

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
