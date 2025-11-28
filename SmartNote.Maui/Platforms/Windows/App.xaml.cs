using Microsoft.UI.Xaml;

namespace SmartNote.Maui.WinUI;

/// <summary>
/// Windows App entry point
/// </summary>
public partial class App : MauiWinUIApplication
{
    public App()
    {
        this.InitializeComponent();
    }

    protected override MauiApp CreateMauiApp() => MauiProgram.CreateMauiApp();
}
