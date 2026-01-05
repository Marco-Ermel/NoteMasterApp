namespace SmartNote.Maui;

/// <summary>
/// App - Main Application class
/// Initializes the Shell-based navigation and applies global resources
/// </summary>
public partial class App : Application
{
    public App()
    {
        try
        {
            // Setup global exception handler
            AppDomain.CurrentDomain.UnhandledException += OnUnhandledException;
            TaskScheduler.UnobservedTaskException += OnUnobservedTaskException;
            
            InitializeComponent();
            
            // Set the MainPage using Shell for navigation
            MainPage = new AppShell();
            
            LogMessage("App initialized successfully");
        }
        catch (Exception ex)
        {
            LogMessage($"App initialization error: {ex.Message}\n{ex.StackTrace}");
            throw;
        }
    }
    
    private void OnUnhandledException(object sender, UnhandledExceptionEventArgs e)
    {
        if (e.ExceptionObject is Exception ex)
        {
            LogMessage($"Unhandled exception: {ex.Message}\n{ex.StackTrace}");
        }
    }
    
    private void OnUnobservedTaskException(object? sender, UnobservedTaskExceptionEventArgs e)
    {
        LogMessage($"Unobserved task exception: {e.Exception.Message}\n{e.Exception.StackTrace}");
        e.SetObserved();
    }
    
    private void LogMessage(string message)
    {
        try
        {
            var logPath = Path.Combine(AppContext.BaseDirectory, "error.log");
            File.AppendAllText(logPath, $"[{DateTime.Now:yyyy-MM-dd HH:mm:ss}] {message}\n\n");
            System.Diagnostics.Debug.WriteLine(message);
        }
        catch { /* Ignore logging errors */ }
    }
    
    /// <summary>
    /// Configure window settings for desktop platforms
    /// Provides optimal window sizing and positioning
    /// </summary>
    protected override Window CreateWindow(IActivationState? activationState)
    {
        var window = base.CreateWindow(activationState);
        
        // Configure window size for desktop experience (matches original React app)
        window.Width = 1400;
        window.Height = 900;
        window.MinimumWidth = 1024;
        window.MinimumHeight = 768;
        window.Title = "SmartNote - Dein digitaler Lernassistent";
        
        return window;
    }
}
