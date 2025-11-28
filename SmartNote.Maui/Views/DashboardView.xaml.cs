using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

/// <summary>
/// DashboardView - Home screen with quick actions
/// </summary>
public partial class DashboardView : ContentView
{
    public DashboardView()
    {
        InitializeComponent();
        
        // Get ViewModel from DI container
        var viewModel = Application.Current?.Handler?.MauiContext?.Services
            .GetService<DashboardViewModel>();
        
        if (viewModel != null)
        {
            BindingContext = viewModel;
            
            // Load data when view appears
            Loaded += async (s, e) =>
            {
                await viewModel.LoadDataCommand.ExecuteAsync(null);
            };
        }
    }
}
