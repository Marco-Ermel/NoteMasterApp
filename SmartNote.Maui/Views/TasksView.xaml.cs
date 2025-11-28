using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class TasksView : ContentView
{
    private TasksViewModel? _viewModel;
    
    public TasksView()
    {
        InitializeComponent();
    }
    
    public TasksView(TasksViewModel viewModel) : this()
    {
        _viewModel = viewModel;
        BindingContext = viewModel;
    }
    
    protected override void OnHandlerChanged()
    {
        base.OnHandlerChanged();
        
        if (_viewModel == null && Handler?.MauiContext?.Services != null)
        {
            _viewModel = Handler.MauiContext.Services.GetService<TasksViewModel>();
            if (_viewModel != null) BindingContext = _viewModel;
        }
        
        if (_viewModel != null)
        {
            _ = _viewModel.LoadDataCommand.ExecuteAsync(null);
        }
    }
}
