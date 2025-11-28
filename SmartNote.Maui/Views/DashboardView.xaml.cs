using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

/// <summary>
/// DashboardView - Home screen with quick actions
/// </summary>
public partial class DashboardView : ContentView
{
    private DashboardViewModel? _viewModel;
    
    public DashboardView()
    {
        InitializeComponent();
    }
    
    /// <summary>
    /// Constructor with dependency injection for proper MVVM pattern
    /// </summary>
    public DashboardView(DashboardViewModel viewModel) : this()
    {
        _viewModel = viewModel;
        BindingContext = viewModel;
    }
    
    /// <summary>
    /// Handle view appearing - load data
    /// </summary>
    protected override void OnHandlerChanged()
    {
        base.OnHandlerChanged();
        
        // If ViewModel wasn't injected, try to get it from DI
        if (_viewModel == null && Handler?.MauiContext?.Services != null)
        {
            _viewModel = Handler.MauiContext.Services.GetService<DashboardViewModel>();
            if (_viewModel != null)
            {
                BindingContext = _viewModel;
            }
        }
        
        // Load data when the view is ready
        if (_viewModel != null)
        {
            _ = _viewModel.LoadDataCommand.ExecuteAsync(null);
        }
    }
}
