namespace SmartNote.Maui;

/// <summary>
/// App - Main Application class
/// Initializes the Shell-based navigation and applies global resources
/// </summary>
public partial class App : Application
{
    public App()
    {
        InitializeComponent();
        
        // Set the MainPage using Shell for navigation
        MainPage = new AppShell();
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
