using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

/// <summary>
/// MainPage - Primary container view
/// Manages sidebar navigation and content area swapping
/// Uses dependency injection for view creation
/// </summary>
public partial class MainPage : ContentPage
{
    private readonly MainViewModel _viewModel;
    private readonly IServiceProvider _serviceProvider;
    
    // Content views cache for smooth transitions
    private readonly Dictionary<string, View> _viewCache = new();
    
    public MainPage(MainViewModel viewModel, IServiceProvider serviceProvider)
    {
        InitializeComponent();
        _viewModel = viewModel;
        _serviceProvider = serviceProvider;
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
    /// Uses view caching for performance and DI for view creation
    /// </summary>
    private void UpdateContentView(string screen)
    {
        View? contentView;
        
        // Check cache first
        if (!_viewCache.TryGetValue(screen, out contentView))
        {
            // Create new view using DI to inject ViewModels
            contentView = screen switch
            {
                "dashboard" => CreateView<DashboardView, DashboardViewModel>(),
                "notes" => CreateView<NotesListView, NotesListViewModel>(),
                "editor" => CreateView<NoteEditorView, NoteEditorViewModel>(),
                "summary" => CreateView<SummaryView, SummaryViewModel>(),
                "cheatsheet" => CreateView<CheatSheetView, CheatSheetViewModel>(),
                "studyplan" => CreateView<StudyPlanView, StudyPlanViewModel>(),
                "tasks" => CreateView<TasksView, TasksViewModel>(),
                "archive" => CreateView<ArchiveView, ArchiveViewModel>(),
                _ => CreateView<DashboardView, DashboardViewModel>()
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
    
    /// <summary>
    /// Generic method to create views with proper DI
    /// Falls back to parameterless constructor if DI fails
    /// </summary>
    private TView CreateView<TView, TViewModel>() 
        where TView : ContentView, new()
        where TViewModel : class
    {
        var viewModel = _serviceProvider.GetService<TViewModel>();
        if (viewModel != null)
        {
            // Try to find constructor that accepts ViewModel
            var viewType = typeof(TView);
            var constructor = viewType.GetConstructor(new[] { typeof(TViewModel) });
            if (constructor != null)
            {
                return (TView)constructor.Invoke(new object[] { viewModel });
            }
        }
        
        // Fallback to parameterless constructor
        return new TView();
    }
    
    protected override void OnDisappearing()
    {
        base.OnDisappearing();
        _viewModel.PropertyChanged -= OnViewModelPropertyChanged;
    }
}
