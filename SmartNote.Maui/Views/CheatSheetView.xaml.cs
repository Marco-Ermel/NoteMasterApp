using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class CheatSheetView : ContentView
{
    private CheatSheetViewModel? _viewModel;
    
    public CheatSheetView()
    {
        InitializeComponent();
    }
    
    public CheatSheetView(CheatSheetViewModel viewModel) : this()
    {
        _viewModel = viewModel;
        BindingContext = viewModel;
    }
    
    protected override void OnHandlerChanged()
    {
        base.OnHandlerChanged();
        
        if (_viewModel == null && Handler?.MauiContext?.Services != null)
        {
            _viewModel = Handler.MauiContext.Services.GetService<CheatSheetViewModel>();
            if (_viewModel != null) BindingContext = _viewModel;
        }
    }
}
