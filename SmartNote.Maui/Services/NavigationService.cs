namespace SmartNote.Maui.Services;

/// <summary>
/// Navigation Service Interface
/// Provides abstraction for Shell-based navigation
/// Enables ViewModel-to-ViewModel navigation without tight coupling
/// </summary>
public interface INavigationService
{
    /// <summary>
    /// Navigate to a specific route
    /// </summary>
    Task NavigateToAsync(string route);
    
    /// <summary>
    /// Navigate to a route with parameters
    /// </summary>
    Task NavigateToAsync(string route, IDictionary<string, object> parameters);
    
    /// <summary>
    /// Navigate back in the stack
    /// </summary>
    Task GoBackAsync();
    
    /// <summary>
    /// Current active route/screen identifier
    /// </summary>
    string CurrentRoute { get; }
    
    /// <summary>
    /// Event fired when navigation occurs
    /// </summary>
    event EventHandler<string>? NavigationChanged;
}

/// <summary>
/// Navigation Service Implementation
/// Uses MAUI Shell for native navigation with animations
/// </summary>
public class NavigationService : INavigationService
{
    private string _currentRoute = "dashboard";
    
    public string CurrentRoute => _currentRoute;
    
    public event EventHandler<string>? NavigationChanged;
    
    public async Task NavigateToAsync(string route)
    {
        try
        {
            _currentRoute = route;
            await Shell.Current.GoToAsync($"///{route}");
            NavigationChanged?.Invoke(this, route);
        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine($"Navigation error: {ex.Message}");
        }
    }
    
    public async Task NavigateToAsync(string route, IDictionary<string, object> parameters)
    {
        try
        {
            _currentRoute = route;
            await Shell.Current.GoToAsync($"///{route}", parameters);
            NavigationChanged?.Invoke(this, route);
        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine($"Navigation error: {ex.Message}");
        }
    }
    
    public async Task GoBackAsync()
    {
        try
        {
            await Shell.Current.GoToAsync("..");
        }
        catch (Exception ex)
        {
            System.Diagnostics.Debug.WriteLine($"Navigation back error: {ex.Message}");
        }
    }
}
