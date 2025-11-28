using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class StudyPlanView : ContentView
{
    public StudyPlanView()
    {
        InitializeComponent();
        var viewModel = Application.Current?.Handler?.MauiContext?.Services.GetService<StudyPlanViewModel>();
        if (viewModel != null)
        {
            BindingContext = viewModel;
            Loaded += async (s, e) => await viewModel.LoadDataCommand.ExecuteAsync(null);
        }
    }
}
