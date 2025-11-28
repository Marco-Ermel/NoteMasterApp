using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

/// <summary>
/// MainPage - Primary container view
/// Manages sidebar navigation and content area swapping
/// </summary>
public partial class MainPage : ContentPage
{
    private readonly MainViewModel _viewModel;
    
    // Content views cache for smooth transitions
    private readonly Dictionary<string, View> _viewCache = new();
    
    public MainPage(MainViewModel viewModel)
    {
        InitializeComponent();
        _viewModel = viewModel;
        BindingContext = viewModel;
        
        // Subscribe to navigation changes to swap content
        _viewModel.PropertyChanged += OnViewModelPropertyChanged;
        
        // Initialize with dashboard view
        UpdateContentView("dashboard");
    }
    
    private void OnViewModelPropertyChanged(object? sender, System.ComponentModel.PropertyChangedEventArgs e)
    {
        if (e.PropertyName == nameof(MainViewModel.ActiveScreen))
        {
            UpdateContentView(_viewModel.ActiveScreen);
        }
    }
    
    /// <summary>
    /// Swap the content area based on active screen
    /// Uses view caching for performance
    /// </summary>
    private void UpdateContentView(string screen)
    {
        View? contentView;
        
        // Check cache first
        if (!_viewCache.TryGetValue(screen, out contentView))
        {
            // Create new view based on screen
            contentView = screen switch
            {
                "dashboard" => new DashboardView(),
                "notes" => new NotesListView(),
                "editor" => new NoteEditorView(),
                "summary" => new SummaryView(),
                "cheatsheet" => new CheatSheetView(),
                "studyplan" => new StudyPlanView(),
                "tasks" => new TasksView(),
                "archive" => new ArchiveView(),
                "story" => new StoryScenesView(),
                _ => new DashboardView()
            };
            
            // Cache the view for reuse
            _viewCache[screen] = contentView;
        }
        
        // Apply fade animation for smooth transition
        MainThread.BeginInvokeOnMainThread(async () =>
        {
            // Fade out
            await ContentArea.FadeTo(0, 150, Easing.CubicIn);
            
            // Swap content
            ContentArea.Content = contentView;
            
            // Fade in
            await ContentArea.FadeTo(1, 150, Easing.CubicOut);
        });
    }
    
    protected override void OnDisappearing()
    {
        base.OnDisappearing();
        _viewModel.PropertyChanged -= OnViewModelPropertyChanged;
    }
}
