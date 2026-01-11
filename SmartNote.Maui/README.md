# SmartNote MAUI

A cross-platform note-taking application built with .NET MAUI, featuring AI-powered summaries, cheat sheets, and study plans.

## 🚀 Features

- **📝 Notes Management**: Create, edit, and organize digital notes with rich text formatting
- **📚 AI Summaries**: Automatically generate condensed summaries from your notes
- **📋 Cheat Sheets**: Create compact, printable reference sheets for quick review
- **📅 Study Plans**: AI-generated study schedules optimized for exam preparation
- **✅ Task Management**: Track learning tasks with priorities and due dates
- **📦 Archive**: Keep old notes organized and easily accessible

## 🏗️ Architecture

This project follows modern .NET MAUI best practices:

### MVVM Pattern
- **Models** (`/Models`): Data structures (Note, TaskItem, StudySession, etc.)
- **ViewModels** (`/ViewModels`): Business logic with CommunityToolkit.Mvvm
- **Views** (`/Views`): XAML-based UI with data binding

### Dependency Injection
All services and ViewModels are registered in `MauiProgram.cs` for proper dependency injection.

### Services Layer
- `INavigationService`: Shell-based navigation abstraction
- `INotesService`: Notes CRUD operations
- `ITasksService`: Task management
- `IStudyPlanService`: Study plan generation

## 🎨 Design

The UI follows the SmartNote design specification with:

- **Color System**: 5-color teal-based professional palette with defined roles
- **Typography**: Poppins font family (Regular, Medium, SemiBold, Bold)
- **Layout**: Responsive grid with sidebar navigation (288px fixed)
- **Design Principles**: Light, fresh, calm, modern, professional, learning-friendly

### 5-Color Design System

The application uses a strict 5-color system where each color has a specific role:

1. **Farbe 1** (#A3C9D9) - Light, fresh, airy
   - Usage: Highlights, info boxes, hover effects, small visual accents

2. **Farbe 2** (#6A9BA6) - Friendly, harmonious, calming
   - Usage: Large surfaces, panels, cards, container backgrounds

3. **Farbe 3** (#346C73) - Elegant, dark, high contrast
   - Usage: Icons on light surfaces, small UI details

4. **Farbe 4** (#103B40) - Stable, trustworthy, profound
   - Usage: Header, navigation, sidebar background, basic app structure

5. **Farbe 5** (#346C73) - Serious, modern, calm
   - Usage: Accents, buttons, important actions (Save, Create, Export)

### Typography Scale

- **Titles & Main headings**: 24-28px, SemiBold/Bold
- **Section headings**: 18-22px, Medium/SemiBold
- **Standard text/Body**: 14-16px, Regular
- **Small hints/Secondary text**: 12-13px, Regular
- **Buttons/Navigation**: 15-17px, Medium

## 📱 Platforms

- ✅ Windows 10/11
- ✅ macOS (via Mac Catalyst)
- ✅ Android 5.0+ (API 21+)
- ✅ iOS 11.0+

## 🛠️ Getting Started

### Prerequisites

- .NET 8.0 SDK or later
- Visual Studio 2022 (Windows) or Visual Studio for Mac with MAUI workload
- For mobile development: Android SDK / Xcode

### Building

```bash
# Restore dependencies
dotnet restore

# Build for Windows
dotnet build -f net8.0-windows10.0.19041.0

# Build for Android
dotnet build -f net8.0-android

# Build for iOS (requires Mac)
dotnet build -f net8.0-ios

# Build for macOS (requires Mac)
dotnet build -f net8.0-maccatalyst
```

### Running

```bash
# Run on Windows
dotnet run -f net8.0-windows10.0.19041.0

# Run on Android (connected device/emulator)
dotnet run -f net8.0-android

# Run on iOS simulator (requires Mac)
dotnet run -f net8.0-ios
```

## 📁 Project Structure

```
SmartNote.Maui/
├── App.xaml(.cs)           # Application entry point
├── AppShell.xaml(.cs)      # Shell navigation configuration
├── MauiProgram.cs          # DI and app configuration
├── Models/                 # Data models
│   ├── Note.cs
│   ├── TaskItem.cs
│   └── StudyModels.cs
├── ViewModels/             # MVVM ViewModels
│   ├── BaseViewModel.cs
│   ├── MainViewModel.cs
│   ├── DashboardViewModel.cs
│   └── ...
├── Views/                  # XAML Views
│   ├── MainPage.xaml(.cs)
│   ├── DashboardView.xaml(.cs)
│   └── ...
├── Services/               # Business logic services
│   ├── NavigationService.cs
│   ├── NotesService.cs
│   └── ...
├── Converters/             # Value converters for bindings
├── Resources/
│   ├── Fonts/
│   │   ├── Poppins-Regular.ttf
│   │   ├── Poppins-Medium.ttf
│   │   ├── Poppins-SemiBold.ttf
│   │   └── Poppins-Bold.ttf
│   ├── Images/
│   └── Styles/
│       ├── Colors.xaml     # 5-color design system
│       └── Styles.xaml     # Typography and component styles
└── Platforms/              # Platform-specific code
    ├── Android/
    ├── iOS/
    ├── MacCatalyst/
    └── Windows/
```

## 🔧 Key Dependencies

- **CommunityToolkit.Mvvm**: Source generators for MVVM pattern
- **CommunityToolkit.Maui**: Enhanced controls and animations
- **Microsoft.Maui.Controls**: Core MAUI framework

## 📝 Original React App

This MAUI application is a complete rewrite of the original React/TypeScript SmartNote web application. All features and UI design have been preserved while modernizing the implementation for native cross-platform deployment.

## 📄 License

See the repository LICENSE file for details.
