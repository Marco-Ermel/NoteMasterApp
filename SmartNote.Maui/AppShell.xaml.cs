using SmartNote.Maui.Views;

namespace SmartNote.Maui;

/// <summary>
/// AppShell - Navigation shell for the application
/// Registers routes for programmatic navigation
/// </summary>
public partial class AppShell : Shell
{
    public AppShell()
    {
        InitializeComponent();
        
        // Register routes for all views
        // This enables NavigateToAsync("route") navigation pattern
        Routing.RegisterRoute("dashboard", typeof(DashboardView));
        Routing.RegisterRoute("notes", typeof(NotesListView));
        Routing.RegisterRoute("editor", typeof(NoteEditorView));
        Routing.RegisterRoute("summary", typeof(SummaryView));
        Routing.RegisterRoute("cheatsheet", typeof(CheatSheetView));
        Routing.RegisterRoute("studyplan", typeof(StudyPlanView));
        Routing.RegisterRoute("tasks", typeof(TasksView));
        Routing.RegisterRoute("archive", typeof(ArchiveView));
        Routing.RegisterRoute("story", typeof(StoryScenesView));
    }
}
