using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Models;
using SmartNote.Maui.Services;
using System.Collections.ObjectModel;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// Summary ViewModel - AI-generated summary display
/// Shows condensed note content with key points
/// </summary>
public partial class SummaryViewModel : BaseViewModel, IQueryAttributable
{
    private readonly INotesService _notesService;
    
    [ObservableProperty]
    private Summary? _summary;
    
    [ObservableProperty]
    private string _noteTitle = "Zusammenfassung: Organische Chemie - Alkane";
    
    [ObservableProperty]
    private string _subject = "Chemie";
    
    [ObservableProperty]
    private string _date = "22. Nov 2025";
    
    [ObservableProperty]
    private string _shortSummary = string.Empty;
    
    [ObservableProperty]
    private ObservableCollection<string> _keyPoints = new();
    
    [ObservableProperty]
    private ObservableCollection<TermDefinition> _terms = new();
    
    [ObservableProperty]
    private int _compressionPercent = 85;
    
    [ObservableProperty]
    private int _readingTimeMinutes = 3;
    
    [ObservableProperty]
    private int _termsCount = 6;
    
    [ObservableProperty]
    private ObservableCollection<string> _relatedNotes = new();
    
    public SummaryViewModel(
        INavigationService navigationService,
        INotesService notesService) : base(navigationService)
    {
        _notesService = notesService;
        Title = "Zusammenfassung";
        
        // Initialize with default data matching original React app
        InitializeDefaultData();
    }
    
    private void InitializeDefaultData()
    {
        ShortSummary = @"Alkane sind gesättigte Kohlenwasserstoffe mit ausschließlich Einfachbindungen zwischen den Kohlenstoffatomen. Sie folgen der Summenformel CnH2n+2 und sind aufgrund ihrer unpolaren Struktur wasserunlöslich. Ihre Reaktionsträgheit macht sie zu stabilen Verbindungen, weshalb sie auch als ""gesättigt"" bezeichnet werden. Die wichtigsten Vertreter sind Methan, Ethan, Propan und Butan.";
        
        KeyPoints = new ObservableCollection<string>
        {
            "Alkane enthalten nur C-C-Einfachbindungen und sind daher gesättigt",
            "Summenformel: CnH2n+2 für unverzweigte Alkane",
            "Unpolare Moleküle → lösen sich nicht in Wasser",
            "Siedepunkt steigt mit zunehmender Kettenlänge",
            "Hauptreaktion: Radikalische Substitution (z.B. Halogenierung)",
            "Methan (CH₄) ist das einfachste und häufigste Alkan"
        };
        
        Terms = new ObservableCollection<TermDefinition>
        {
            new() { Term = "Gesättigt", Definition = "Nur Einfachbindungen zwischen C-Atomen" },
            new() { Term = "Kohlenwasserstoff", Definition = "Verbindung aus nur Kohlenstoff und Wasserstoff" },
            new() { Term = "Unpolar", Definition = "Keine elektrische Ladungsverteilung im Molekül" },
            new() { Term = "Radikalische Substitution", Definition = "Reaktionsmechanismus mit freien Radikalen" },
            new() { Term = "Homologe Reihe", Definition = "Serie von Verbindungen mit gleichem Grundaufbau" },
            new() { Term = "Siedepunkt", Definition = "Temperatur, bei der ein Stoff vom flüssigen in gasförmigen Zustand übergeht" }
        };
        
        RelatedNotes = new ObservableCollection<string>
        {
            "Alkene und Alkine",
            "Isomerie bei Alkanen",
            "Nomenklatur Kohlenwasserstoffe"
        };
    }
    
    public void ApplyQueryAttributes(IDictionary<string, object> query)
    {
        if (query.TryGetValue("NoteId", out var noteIdObj) && noteIdObj is int noteId)
        {
            _ = LoadSummaryAsync(noteId);
        }
    }
    
    private async Task LoadSummaryAsync(int noteId)
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            
            var summary = await _notesService.GenerateSummaryAsync(noteId);
            Summary = summary;
            NoteTitle = $"Zusammenfassung: {summary.NoteTitle}";
            Subject = summary.Subject;
            Date = summary.CreatedDate.ToString("dd. MMM yyyy");
            ShortSummary = summary.ShortSummary;
            KeyPoints = new ObservableCollection<string>(summary.KeyPoints);
            Terms = new ObservableCollection<TermDefinition>(summary.Terms);
            CompressionPercent = summary.CompressionPercent;
            ReadingTimeMinutes = summary.ReadingTimeMinutes;
            TermsCount = summary.Terms.Count;
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    /// <summary>
    /// Export summary as PDF
    /// </summary>
    [RelayCommand]
    private async Task ExportPdfAsync()
    {
        // PDF export functionality would be implemented here
        await Task.CompletedTask;
    }
    
    /// <summary>
    /// Navigate to cheat sheet
    /// </summary>
    [RelayCommand]
    private async Task ViewCheatSheetAsync()
    {
        await NavigationService.NavigateToAsync("cheatsheet");
    }
    
    /// <summary>
    /// Navigate to study plan
    /// </summary>
    [RelayCommand]
    private async Task CreateStudyPlanAsync()
    {
        await NavigationService.NavigateToAsync("studyplan");
    }
    
    /// <summary>
    /// Navigate back to notes
    /// </summary>
    [RelayCommand]
    private async Task BackToNotesAsync()
    {
        await NavigationService.NavigateToAsync("notes");
    }
    
    /// <summary>
    /// Open a related note
    /// </summary>
    [RelayCommand]
    private async Task OpenRelatedNoteAsync(string noteTitle)
    {
        // In a full implementation, this would find and open the related note
        await NavigationService.NavigateToAsync("notes");
    }
}
