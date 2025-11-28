using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class StoryScenesView : ContentView
{
    public StoryScenesView()
    {
        InitializeComponent();
        var viewModel = Application.Current?.Handler?.MauiContext?.Services.GetService<StoryScenesViewModel>();
        if (viewModel != null) BindingContext = viewModel;
    }
}
