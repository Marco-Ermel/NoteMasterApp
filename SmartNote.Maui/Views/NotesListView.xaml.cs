using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

/// <summary>
/// NotesListView - Displays all notes with filtering
/// </summary>
public partial class NotesListView : ContentView
{
    public NotesListView()
    {
        InitializeComponent();
        
        var viewModel = Application.Current?.Handler?.MauiContext?.Services
            .GetService<NotesListViewModel>();
        
        if (viewModel != null)
        {
            BindingContext = viewModel;
            
            Loaded += async (s, e) =>
            {
                await viewModel.LoadDataCommand.ExecuteAsync(null);
            };
        }
    }
}
