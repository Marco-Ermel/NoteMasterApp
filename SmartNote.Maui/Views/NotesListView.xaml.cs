using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

/// <summary>
/// NotesListView - Displays all notes with filtering
/// </summary>
public partial class NotesListView : ContentView
{
    private NotesListViewModel? _viewModel;
    
    public NotesListView()
    {
        InitializeComponent();
    }
    
    public NotesListView(NotesListViewModel viewModel) : this()
    {
        _viewModel = viewModel;
        BindingContext = viewModel;
    }
    
    protected override void OnHandlerChanged()
    {
        base.OnHandlerChanged();
        
        if (_viewModel == null && Handler?.MauiContext?.Services != null)
        {
            _viewModel = Handler.MauiContext.Services.GetService<NotesListViewModel>();
            if (_viewModel != null) BindingContext = _viewModel;
        }
        
        if (_viewModel != null)
        {
            _ = _viewModel.LoadDataCommand.ExecuteAsync(null);
        }
    }
}
