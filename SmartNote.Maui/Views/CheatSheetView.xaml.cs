using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class CheatSheetView : ContentView
{
    public CheatSheetView()
    {
        InitializeComponent();
        var viewModel = Application.Current?.Handler?.MauiContext?.Services.GetService<CheatSheetViewModel>();
        if (viewModel != null) BindingContext = viewModel;
    }
}
