using SmartNote.Maui.ViewModels;

namespace SmartNote.Maui.Views;

/// <summary>
/// NoteEditorView - Rich text note editing
/// </summary>
public partial class NoteEditorView : ContentView
{
    public NoteEditorView()
    {
        InitializeComponent();
        
        var viewModel = Application.Current?.Handler?.MauiContext?.Services
            .GetService<NoteEditorViewModel>();
        
        if (viewModel != null)
        {
            BindingContext = viewModel;
        }
    }
}
