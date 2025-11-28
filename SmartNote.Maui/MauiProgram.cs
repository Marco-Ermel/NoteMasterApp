using CommunityToolkit.Maui;
using Microsoft.Extensions.Logging;
using SmartNote.Maui.Services;
using SmartNote.Maui.ViewModels;
using SmartNote.Maui.Views;

namespace SmartNote.Maui;

/// <summary>
/// MauiProgram - Entry point for the application
/// Configures dependency injection, services, and ViewModels using best practices
/// </summary>
public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        
        builder
            .UseMauiApp<App>()
            // Initialize CommunityToolkit.Maui for enhanced controls and animations
            .UseMauiCommunityToolkit()
            .ConfigureFonts(fonts =>
            {
                // Use Inter font family to match original design
                fonts.AddFont("Inter-Regular.ttf", "InterRegular");
                fonts.AddFont("Inter-Medium.ttf", "InterMedium");
                fonts.AddFont("Inter-Bold.ttf", "InterBold");
                fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
            });

#if DEBUG
        builder.Logging.AddDebug();
#endif

        // Register Services (Singleton for shared state)
        builder.Services.AddSingleton<INavigationService, NavigationService>();
        builder.Services.AddSingleton<INotesService, NotesService>();
        builder.Services.AddSingleton<ITasksService, TasksService>();
        builder.Services.AddSingleton<IStudyPlanService, StudyPlanService>();

        // Register ViewModels (Transient for fresh instances per view)
        builder.Services.AddTransient<MainViewModel>();
        builder.Services.AddTransient<DashboardViewModel>();
        builder.Services.AddTransient<NotesListViewModel>();
        builder.Services.AddTransient<NoteEditorViewModel>();
        builder.Services.AddTransient<SummaryViewModel>();
        builder.Services.AddTransient<CheatSheetViewModel>();
        builder.Services.AddTransient<StudyPlanViewModel>();
        builder.Services.AddTransient<TasksViewModel>();
        builder.Services.AddTransient<ArchiveViewModel>();
        builder.Services.AddTransient<StoryScenesViewModel>();

        // Register Views (Transient for navigation)
        builder.Services.AddTransient<MainPage>();
        builder.Services.AddTransient<DashboardView>();
        builder.Services.AddTransient<NotesListView>();
        builder.Services.AddTransient<NoteEditorView>();
        builder.Services.AddTransient<SummaryView>();
        builder.Services.AddTransient<CheatSheetView>();
        builder.Services.AddTransient<StudyPlanView>();
        builder.Services.AddTransient<TasksView>();
        builder.Services.AddTransient<ArchiveView>();
        builder.Services.AddTransient<StoryScenesView>();

        return builder.Build();
    }
}
