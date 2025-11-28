using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Models;
using SmartNote.Maui.Services;
using System.Collections.ObjectModel;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// CheatSheet ViewModel - Compact learning reference display
/// Optimized for quick review and printing
/// </summary>
public partial class CheatSheetViewModel : BaseViewModel, IQueryAttributable
{
    private readonly INotesService _notesService;
    
    [ObservableProperty]
    private CheatSheet? _cheatSheet;
    
    [ObservableProperty]
    private string _cheatSheetTitle = "ALKANE - Spickzettel";
    
    [ObservableProperty]
    private string _subject = "Chemie";
    
    [ObservableProperty]
    private string _subtitle = "Gesättigte Kohlenwasserstoffe";
    
    [ObservableProperty]
    private string _definition = "Gesättigte Kohlenwasserstoffe mit nur Einfachbindungen zwischen C-Atomen";
    
    [ObservableProperty]
    private string _formula = "CₙH₂ₙ₊₂";
    
    [ObservableProperty]
    private ObservableCollection<string> _properties = new();
    
    [ObservableProperty]
    private ObservableCollection<AlkaneItem> _alkanes = new();
    
    [ObservableProperty]
    private string _reactions = "Hauptreaktion: Radikalische Substitution (z.B. Halogenierung)";
    
    [ObservableProperty]
    private string _memoryTip = string.Empty;
    
    [ObservableProperty]
    private string _format = "A4 (210 × 297 mm)";
    
    [ObservableProperty]
    private string _compression = "95% reduziert";
    
    [ObservableProperty]
    private string _readability = "Sehr gut";
    
    [ObservableProperty]
    private ObservableCollection<string> _otherCheatSheets = new();
    
    public CheatSheetViewModel(
        INavigationService navigationService,
        INotesService notesService) : base(navigationService)
    {
        _notesService = notesService;
        Title = "Spickzettel";
        
        InitializeDefaultData();
    }
    
    private void InitializeDefaultData()
    {
        Properties = new ObservableCollection<string>
        {
            "Nur C-C-Einfachbindungen",
            "Unpolar → wasserunlöslich",
            "Siedepunkt ↑ mit Kettenlänge",
            "Reaktionsträge (gesättigt)"
        };
        
        Alkanes = new ObservableCollection<AlkaneItem>
        {
            new() { Name = "Methan", Formula = "CH₄", Note = "einfachstes" },
            new() { Name = "Ethan", Formula = "C₂H₆", Note = "2 C-Atome" },
            new() { Name = "Propan", Formula = "C₃H₈", Note = "3 C-Atome" },
            new() { Name = "Butan", Formula = "C₄H₁₀", Note = "4 C-Atome" }
        };
        
        MemoryTip = "💡 MERKSATZ: \"Alkane sind die Basis der organischen Chemie - stabil und gesättigt\"";
        
        OtherCheatSheets = new ObservableCollection<string>
        {
            "Alkene - Ungesättigte KW",
            "Chemische Bindungen",
            "Reaktionsmechanismen"
        };
    }
    
    public void ApplyQueryAttributes(IDictionary<string, object> query)
    {
        if (query.TryGetValue("NoteId", out var noteIdObj) && noteIdObj is int noteId)
        {
            _ = LoadCheatSheetAsync(noteId);
        }
    }
    
    private async Task LoadCheatSheetAsync(int noteId)
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            
            var cheatSheet = await _notesService.GenerateCheatSheetAsync(noteId);
            CheatSheet = cheatSheet;
            CheatSheetTitle = cheatSheet.Title;
            Subject = cheatSheet.Subject;
            Subtitle = cheatSheet.Subtitle;
            MemoryTip = cheatSheet.MemoryTip;
            
            // Parse sections
            foreach (var section in cheatSheet.Sections)
            {
                switch (section.Title)
                {
                    case "DEFINITION":
                        Definition = section.Content;
                        break;
                    case "SUMMENFORMEL":
                        Formula = section.Content;
                        break;
                    case "EIGENSCHAFTEN":
                        Properties = new ObservableCollection<string>(section.BulletPoints);
                        break;
                    case "REAKTIONEN":
                        Reactions = section.Content;
                        break;
                }
            }
        }
        finally
        {
            IsBusy = false;
        }
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
    /// Export as image
    /// </summary>
    [RelayCommand]
    private async Task ExportImageAsync()
    {
        // Image export functionality
        await Task.CompletedTask;
    }
    
    /// <summary>
    /// Print cheat sheet
    /// </summary>
    [RelayCommand]
    private async Task PrintAsync()
    {
        // Print functionality
        await Task.CompletedTask;
    }
    
    /// <summary>
    /// Edit cheat sheet
    /// </summary>
    [RelayCommand]
    private async Task EditAsync()
    {
        // Navigate to editor
        await NavigationService.NavigateToAsync("editor");
    }
    
    /// <summary>
    /// Navigate back to note
    /// </summary>
    [RelayCommand]
    private async Task BackToNoteAsync()
    {
        await NavigationService.NavigateToAsync("notes");
    }
    
    /// <summary>
    /// Open another cheat sheet
    /// </summary>
    [RelayCommand]
    private async Task OpenCheatSheetAsync(string title)
    {
        // Would load the selected cheat sheet
        await Task.CompletedTask;
    }
}

/// <summary>
/// Helper class for alkane display
/// </summary>
public class AlkaneItem
{
    public string Name { get; set; } = string.Empty;
    public string Formula { get; set; } = string.Empty;
    public string Note { get; set; } = string.Empty;
}
