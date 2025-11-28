using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class SummaryView : ContentView
{
    public SummaryView()
    {
        InitializeComponent();
        var viewModel = Application.Current?.Handler?.MauiContext?.Services
            .GetService<SummaryViewModel>();
        if (viewModel != null) BindingContext = viewModel;
    }
}
