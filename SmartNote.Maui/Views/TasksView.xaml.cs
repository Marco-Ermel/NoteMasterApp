using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class TasksView : ContentView
{
    public TasksView()
    {
        InitializeComponent();
        var viewModel = Application.Current?.Handler?.MauiContext?.Services.GetService<TasksViewModel>();
        if (viewModel != null)
        {
            BindingContext = viewModel;
            Loaded += async (s, e) => await viewModel.LoadDataCommand.ExecuteAsync(null);
        }
    }
}
