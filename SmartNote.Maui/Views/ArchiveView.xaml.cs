using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class ArchiveView : ContentView
{
    public ArchiveView()
    {
        InitializeComponent();
        var viewModel = Application.Current?.Handler?.MauiContext?.Services.GetService<ArchiveViewModel>();
        if (viewModel != null)
        {
            BindingContext = viewModel;
            Loaded += async (s, e) => await viewModel.LoadDataCommand.ExecuteAsync(null);
        }
    }
}
