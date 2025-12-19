# Fonts Directory

This directory should contain the font files used by the SmartNote application.

## Required Fonts

The application is designed to use the **Inter** font family. To add these fonts:

1. Download the Inter font family from [Google Fonts](https://fonts.google.com/specimen/Inter) or [GitHub](https://github.com/rsms/inter)
2. Place the following font files in this directory:
   - `Inter-Regular.ttf`
   - `Inter-Medium.ttf`
   - `Inter-Bold.ttf`

## Alternative

If you don't add these fonts, the application will fall back to system default fonts (typically Segoe UI on Windows). The application will still work properly, but the typography may look slightly different from the original design.

## Configuration

After adding the fonts, update `MauiProgram.cs` to register them:

```csharp
.ConfigureFonts(fonts =>
{
    fonts.AddFont("Inter-Regular.ttf", "InterRegular");
    fonts.AddFont("Inter-Medium.ttf", "InterMedium");
    fonts.AddFont("Inter-Bold.ttf", "InterBold");
});
```
