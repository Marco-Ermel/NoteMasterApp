using System.Globalization;

namespace SmartNote.Maui.Converters;

/// <summary>
/// Converts active navigation route to background color
/// </summary>
public class ActiveNavConverter : IValueConverter
{
    public object? Convert(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        if (value is string activeScreen && parameter is string targetScreen)
        {
            if (activeScreen == targetScreen || 
                (targetScreen == "notes" && (activeScreen == "editor" || activeScreen == "scan-result")))
            {
                return Application.Current?.Resources["PrimaryMedium"] as Color ?? Colors.Teal;
            }
        }
        return Colors.Transparent;
    }

    public object? ConvertBack(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}

/// <summary>
/// Converts priority to high priority visibility
/// </summary>
public class PriorityHighConverter : IValueConverter
{
    public object? Convert(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        if (value is Models.TaskPriority priority)
        {
            return priority == Models.TaskPriority.High;
        }
        return false;
    }

    public object? ConvertBack(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}

/// <summary>
/// Converts dark theme flag to background color
/// </summary>
public class DarkThemeColorConverter : IValueConverter
{
    public object? Convert(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        if (value is bool isDark && isDark)
        {
            return Application.Current?.Resources["PrimaryMedium"] as Color ?? Colors.Teal;
        }
        return Application.Current?.Resources["PrimaryLightest"] as Color ?? Colors.LightGray;
    }

    public object? ConvertBack(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}

/// <summary>
/// Converts dark theme flag to text color
/// </summary>
public class DarkThemeTextConverter : IValueConverter
{
    public object? Convert(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        if (value is bool isDark && isDark)
        {
            return Application.Current?.Resources["TextOnDark"] as Color ?? Colors.White;
        }
        return Application.Current?.Resources["TextPrimary"] as Color ?? Colors.Black;
    }

    public object? ConvertBack(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}

/// <summary>
/// Converts dark theme flag to secondary text color
/// </summary>
public class DarkThemeSecondaryTextConverter : IValueConverter
{
    public object? Convert(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        if (value is bool isDark && isDark)
        {
            return Application.Current?.Resources["TextLight"] as Color ?? Colors.LightGray;
        }
        return Application.Current?.Resources["TextMuted"] as Color ?? Colors.Gray;
    }

    public object? ConvertBack(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        throw new NotImplementedException();
    }
}

/// <summary>
/// Inverts boolean value
/// </summary>
public class InverseBoolConverter : IValueConverter
{
    public object? Convert(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        if (value is bool boolValue)
        {
            return !boolValue;
        }
        return false;
    }

    public object? ConvertBack(object? value, Type targetType, object? parameter, CultureInfo culture)
    {
        if (value is bool boolValue)
        {
            return !boolValue;
        }
        return false;
    }
}
