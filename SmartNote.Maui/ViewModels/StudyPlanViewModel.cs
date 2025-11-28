using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Models;
using SmartNote.Maui.Services;
using System.Collections.ObjectModel;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// StudyPlan ViewModel - AI-generated study schedule
/// Displays daily tasks organized by subject
/// </summary>
public partial class StudyPlanViewModel : BaseViewModel
{
    private readonly IStudyPlanService _studyPlanService;
    
    [ObservableProperty]
    private ObservableCollection<StudyDay> _studyDays = new();
    
    [ObservableProperty]
    private ObservableCollection<SubjectInfo> _subjects = new();
    
    [ObservableProperty]
    private ObservableCollection<ExamInfo> _upcomingExams = new();
    
    [ObservableProperty]
    private int _totalDays = 5;
    
    [ObservableProperty]
    private string _totalStudyTime = "18,5 Stunden";
    
    [ObservableProperty]
    private int _completedSessions;
    
    [ObservableProperty]
    private int _totalSessions;
    
    [ObservableProperty]
    private ObservableCollection<string> _aiTips = new();
    
    public StudyPlanViewModel(
        INavigationService navigationService,
        IStudyPlanService studyPlanService) : base(navigationService)
    {
        _studyPlanService = studyPlanService;
        Title = "Lernplan: Prüfungsvorbereitung";
        
        InitializeAiTips();
    }
    
    private void InitializeAiTips()
    {
        AiTips = new ObservableCollection<string>
        {
            "Beginne früh mit Chemie",
            "Mache regelmäßig Pausen",
            "Wiederhole täglich das Gelernte",
            "Nutze Spickzettel zur Wiederholung"
        };
    }
    
    /// <summary>
    /// Load study plan data
    /// </summary>
    [RelayCommand]
    public async Task LoadDataAsync()
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            
            // Load study days
            var days = await _studyPlanService.GetStudyPlanAsync();
            StudyDays = new ObservableCollection<StudyDay>(days);
            TotalDays = StudyDays.Count;
            
            // Load subject breakdown
            var breakdown = await _studyPlanService.GetSubjectBreakdownAsync();
            Subjects = new ObservableCollection<SubjectInfo>(
                breakdown.Select(kvp => new SubjectInfo
                {
                    Subject = kvp.Key,
                    Hours = kvp.Value.Hours,
                    Sessions = kvp.Value.Sessions
                })
            );
            
            // Load session stats
            TotalSessions = await _studyPlanService.GetTotalSessionsAsync();
            CompletedSessions = await _studyPlanService.GetCompletedSessionsAsync();
            
            // Load total study time
            var totalTime = await _studyPlanService.GetTotalStudyTimeAsync();
            TotalStudyTime = FormatStudyTime(totalTime);
            
            // Load upcoming exams
            var exams = await _studyPlanService.GetUpcomingExamsAsync();
            UpcomingExams = new ObservableCollection<ExamInfo>(
                exams.Select(e => new ExamInfo
                {
                    Subject = e.Subject,
                    Date = e.Date.ToString("dd. MMM yyyy")
                })
            );
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    private static string FormatStudyTime(TimeSpan time)
    {
        var hours = (int)time.TotalHours;
        var minutes = time.Minutes;
        
        if (minutes > 0)
        {
            return $"{hours},{minutes / 6} Stunden";
        }
        
        return $"{hours} Stunden";
    }
    
    /// <summary>
    /// Toggle session completion
    /// </summary>
    [RelayCommand]
    private async Task ToggleSessionAsync(StudySession session)
    {
        await _studyPlanService.ToggleSessionCompletionAsync(session.Id);
        await LoadDataAsync();
    }
    
    /// <summary>
    /// Save study plan
    /// </summary>
    [RelayCommand]
    private async Task SavePlanAsync()
    {
        // Save functionality
        await Task.CompletedTask;
    }
    
    /// <summary>
    /// Export as PDF
    /// </summary>
    [RelayCommand]
    private async Task ExportPdfAsync()
    {
        // PDF export functionality
        await Task.CompletedTask;
    }
    
    /// <summary>
    /// Navigate back to dashboard
    /// </summary>
    [RelayCommand]
    private async Task BackToDashboardAsync()
    {
        await NavigationService.NavigateToAsync("dashboard");
    }
}

/// <summary>
/// Helper class for subject breakdown display
/// </summary>
public class SubjectInfo
{
    public string Subject { get; set; } = string.Empty;
    public string Hours { get; set; } = string.Empty;
    public int Sessions { get; set; }
}

/// <summary>
/// Helper class for exam display
/// </summary>
public class ExamInfo
{
    public string Subject { get; set; } = string.Empty;
    public string Date { get; set; } = string.Empty;
}
