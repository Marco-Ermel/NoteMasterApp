using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

/// <summary>
/// NoteEditorView - Rich text note editing
/// </summary>
public partial class NoteEditorView : ContentView
{
    private NoteEditorViewModel? _viewModel;
    
    public NoteEditorView()
    {
        InitializeComponent();
    }
    
    public NoteEditorView(NoteEditorViewModel viewModel) : this()
    {
        _viewModel = viewModel;
        BindingContext = viewModel;
    }
    
    protected override void OnHandlerChanged()
    {
        base.OnHandlerChanged();
        
        if (_viewModel == null && Handler?.MauiContext?.Services != null)
        {
            _viewModel = Handler.MauiContext.Services.GetService<NoteEditorViewModel>();
            if (_viewModel != null) BindingContext = _viewModel;
        }
    }
}
