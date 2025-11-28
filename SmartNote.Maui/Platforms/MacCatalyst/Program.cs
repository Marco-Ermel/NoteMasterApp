using ObjCRuntime;
using UIKit;

namespace SmartNote.Maui;

/// <summary>
/// Mac Catalyst Program entry point
/// </summary>
public class Program
{
    static void Main(string[] args)
    {
        UIApplication.Main(args, null, typeof(AppDelegate));
    }
}
