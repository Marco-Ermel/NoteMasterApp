using ObjCRuntime;
using UIKit;

namespace SmartNote.Maui;

/// <summary>
/// iOS Program entry point
/// </summary>
public class Program
{
    static void Main(string[] args)
    {
        UIApplication.Main(args, null, typeof(AppDelegate));
    }
}
