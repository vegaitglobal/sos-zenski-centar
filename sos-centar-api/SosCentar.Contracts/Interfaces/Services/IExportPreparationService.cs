using SosCentar.Contracts.Dtos.ReportTables;
using System;

namespace SosCentar.Contracts.Interfaces.Services
{
    public interface IExportPreparationService
    {
        ExportTableDto GetUsersCountPerCategory(DateTime from, DateTime to, string title);
        ExportTableDto GetReportPerAnswerOnQuestion(DateTime from, DateTime to, string title, string questionText, bool includeTotalColumn = false);
        ExportTableDto GetReportPerAnswerOnQuestionPerCategory(DateTime from, DateTime to, string title, string questionText, bool includeTotalColumn = false);
    }
}
