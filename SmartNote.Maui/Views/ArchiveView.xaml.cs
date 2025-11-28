using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class ArchiveView : ContentView
{
    private ArchiveViewModel? _viewModel;
    
    public ArchiveView()
    {
        InitializeComponent();
    }
    
    public ArchiveView(ArchiveViewModel viewModel) : this()
    {
        _viewModel = viewModel;
        BindingContext = viewModel;
    }
    
    protected override void OnHandlerChanged()
    {
        base.OnHandlerChanged();
        
        if (_viewModel == null && Handler?.MauiContext?.Services != null)
        {
            _viewModel = Handler.MauiContext.Services.GetService<ArchiveViewModel>();
            if (_viewModel != null) BindingContext = _viewModel;
        }
        
        if (_viewModel != null)
        {
            _ = _viewModel.LoadDataCommand.ExecuteAsync(null);
        }
    }
}
