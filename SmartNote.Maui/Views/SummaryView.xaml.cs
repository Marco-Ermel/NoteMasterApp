using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

public partial class SummaryView : ContentView
{
    private SummaryViewModel? _viewModel;
    
    public SummaryView()
    {
        InitializeComponent();
    }
    
    public SummaryView(SummaryViewModel viewModel) : this()
    {
        _viewModel = viewModel;
        BindingContext = viewModel;
    }
    
    protected override void OnHandlerChanged()
    {
        base.OnHandlerChanged();
        
        if (_viewModel == null && Handler?.MauiContext?.Services != null)
        {
            _viewModel = Handler.MauiContext.Services.GetService<SummaryViewModel>();
            if (_viewModel != null) BindingContext = _viewModel;
        }
    }
}
