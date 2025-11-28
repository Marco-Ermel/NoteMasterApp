using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class StoryScenesView : ContentView
{
    private StoryScenesViewModel? _viewModel;
    
    public StoryScenesView()
    {
        InitializeComponent();
    }
    
    public StoryScenesView(StoryScenesViewModel viewModel) : this()
    {
        _viewModel = viewModel;
        BindingContext = viewModel;
    }
    
    protected override void OnHandlerChanged()
    {
        base.OnHandlerChanged();
        
        if (_viewModel == null && Handler?.MauiContext?.Services != null)
        {
            _viewModel = Handler.MauiContext.Services.GetService<StoryScenesViewModel>();
            if (_viewModel != null) BindingContext = _viewModel;
        }
    }
}
