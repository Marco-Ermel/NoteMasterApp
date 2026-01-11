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
                // Use Poppins font family as per design specification
                fonts.AddFont("Poppins-Regular.ttf", "PoppinsRegular");
                fonts.AddFont("Poppins-Medium.ttf", "PoppinsMedium");
                fonts.AddFont("Poppins-SemiBold.ttf", "PoppinsSemiBold");
                fonts.AddFont("Poppins-Bold.ttf", "PoppinsBold");
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

        // Register Views with ViewModel injection
        // MainPage requires IServiceProvider for creating child views with DI
        builder.Services.AddTransient<MainPage>(sp => new MainPage(
            sp.GetRequiredService<MainViewModel>(),
            sp
        ));
        
        // Child ContentViews with ViewModel injection
        builder.Services.AddTransient<DashboardView>(sp => new DashboardView(
            sp.GetRequiredService<DashboardViewModel>()));
        builder.Services.AddTransient<NotesListView>(sp => new NotesListView(
            sp.GetRequiredService<NotesListViewModel>()));
        builder.Services.AddTransient<NoteEditorView>(sp => new NoteEditorView(
            sp.GetRequiredService<NoteEditorViewModel>()));
        builder.Services.AddTransient<SummaryView>(sp => new SummaryView(
            sp.GetRequiredService<SummaryViewModel>()));
        builder.Services.AddTransient<CheatSheetView>(sp => new CheatSheetView(
            sp.GetRequiredService<CheatSheetViewModel>()));
        builder.Services.AddTransient<StudyPlanView>(sp => new StudyPlanView(
            sp.GetRequiredService<StudyPlanViewModel>()));
        builder.Services.AddTransient<TasksView>(sp => new TasksView(
            sp.GetRequiredService<TasksViewModel>()));
        builder.Services.AddTransient<ArchiveView>(sp => new ArchiveView(
            sp.GetRequiredService<ArchiveViewModel>()));
        builder.Services.AddTransient<StoryScenesView>(sp => new StoryScenesView(
            sp.GetRequiredService<StoryScenesViewModel>()));

        return builder.Build();
    }
}
