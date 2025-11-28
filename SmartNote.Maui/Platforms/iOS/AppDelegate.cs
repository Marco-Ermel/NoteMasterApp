using Foundation;

namespace SmartNote.Maui;

/// <summary>
/// AppDelegate for iOS platform
/// </summary>
[Register("AppDelegate")]
public class AppDelegate : MauiUIApplicationDelegate
{
    protected override MauiApp CreateMauiApp() => MauiProgram.CreateMauiApp();
}
