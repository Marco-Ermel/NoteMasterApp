using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Services;
using System.Collections.ObjectModel;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// StoryScenes ViewModel - Displays the SmartNote feature showcase
/// Shows step-by-step usage with images
/// </summary>
public partial class StoryScenesViewModel : BaseViewModel
{
    [ObservableProperty]
    private ObservableCollection<StoryScene> _scenes = new();
    
    [ObservableProperty]
    private ObservableCollection<FeatureItem> _features = new();
    
    public StoryScenesViewModel(INavigationService navigationService) : base(navigationService)
    {
        Title = "SmartNote in Aktion";
        InitializeScenes();
        InitializeFeatures();
    }
    
    private void InitializeScenes()
    {
        Scenes = new ObservableCollection<StoryScene>
        {
            new StoryScene
            {
                Step = 1,
                Title = "Schritt 1: Notizen erstellen",
                Description = "Lena sitzt konzentriert am PC und erstellt ihre digitalen Notizen in SmartNote. Sie kann direkt am Computer tippen oder mit einem digitalen Stift handschriftlich schreiben.",
                ImageSource = "scene1.png"
            },
            new StoryScene
            {
                Step = 2,
                Title = "Schritt 2: Effizient tippen",
                Description = "Nahaufnahme: Lenas Hände bewegen sich fließend über die Tastatur, während sie ihre Lernnotizen strukturiert erfasst. Der Editor bietet alle wichtigen Formatierungsoptionen.",
                ImageSource = "scene2.png"
            },
            new StoryScene
            {
                Step = 3,
                Title = "Schritt 3: Strukturierte Notizen",
                Description = "Der Editor zeigt Lenas fertig formatierte Notizen mit markierten Stichpunkten, Tags und wichtigen Begriffen. Alles ist übersichtlich strukturiert.",
                ImageSource = "scene3.png"
            },
            new StoryScene
            {
                Step = 4,
                Title = "Schritt 4: Automatische Lernhilfen",
                Description = "SmartNote erstellt automatisch Zusammenfassungen und Spickzettel aus Lenas Notizen. Die KI extrahiert die wichtigsten Punkte und bereitet sie lernfreundlich auf.",
                ImageSource = "scene4.png"
            },
            new StoryScene
            {
                Step = 5,
                Title = "Schritt 5: Erfolgreich lernen",
                Description = "Lena schaut zufrieden auf ihre perfekt strukturierten Lernmaterialien. Mit SmartNote ist sie bestens auf ihre Prüfungen vorbereitet – alles digital, strukturiert und effizient.",
                ImageSource = "scene5.png",
                IsDarkTheme = true
            }
        };
    }
    
    private void InitializeFeatures()
    {
        Features = new ObservableCollection<FeatureItem>
        {
            new FeatureItem { Number = 1, Title = "Notizen erstellen", Description = "Tippen oder handschriftlich mit digitalem Stift am PC" },
            new FeatureItem { Number = 2, Title = "Automatisch zusammenfassen", Description = "KI erstellt kompakte Zusammenfassungen" },
            new FeatureItem { Number = 3, Title = "Spickzettel generieren", Description = "Wichtigste Punkte auf einen Blick" },
            new FeatureItem { Number = 4, Title = "Lernpläne erstellen", Description = "Strukturierte Tagesplanung für Prüfungen" },
            new FeatureItem { Number = 5, Title = "Aufgaben verwalten", Description = "Alle Lernaufgaben an einem Ort" },
            new FeatureItem { Number = 6, Title = "Alles exportieren", Description = "Als PDF exportieren und teilen" }
        };
    }
}

/// <summary>
/// Story scene display model
/// </summary>
public class StoryScene
{
    public int Step { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string ImageSource { get; set; } = string.Empty;
    public bool IsDarkTheme { get; set; }
}

/// <summary>
/// Feature item display model
/// </summary>
public class FeatureItem
{
    public int Number { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
}
