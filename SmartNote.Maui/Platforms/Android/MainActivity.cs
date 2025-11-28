using Android.App;
using Android.Content.PM;
using Android.OS;

namespace SmartNote.Maui;

/// <summary>
/// MainActivity for Android platform
/// Configured for modern Android with adaptive layouts
/// </summary>
[Activity(
    Theme = "@style/Maui.SplashTheme", 
    MainLauncher = true, 
    ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation | ConfigChanges.UiMode | ConfigChanges.ScreenLayout | ConfigChanges.SmallestScreenSize | ConfigChanges.Density,
    LaunchMode = LaunchMode.SingleTop)]
public class MainActivity : MauiAppCompatActivity
{
}
