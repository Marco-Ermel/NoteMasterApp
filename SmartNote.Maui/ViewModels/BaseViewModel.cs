using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using SmartNote.Maui.Services;

namespace SmartNote.Maui.ViewModels;

/// <summary>
/// Base ViewModel providing common functionality
/// Uses CommunityToolkit.Mvvm for source generators and INotifyPropertyChanged
/// </summary>
public abstract partial class BaseViewModel : ObservableObject
{
    protected readonly INavigationService NavigationService;
    
    [ObservableProperty]
    [NotifyPropertyChangedFor(nameof(IsNotBusy))]
    private bool _isBusy;
    
    [ObservableProperty]
    private string _title = string.Empty;
    
    /// <summary>
    /// Inverse of IsBusy for binding
    /// </summary>
    public bool IsNotBusy => !IsBusy;
    
    protected BaseViewModel(INavigationService navigationService)
    {
        NavigationService = navigationService;
    }
    
    /// <summary>
    /// Navigate to a specific screen
    /// </summary>
    [RelayCommand]
    protected virtual async Task NavigateToAsync(string route)
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            await NavigationService.NavigateToAsync(route);
        }
        finally
        {
            IsBusy = false;
        }
    }
    
    /// <summary>
    /// Navigate back
    /// </summary>
    [RelayCommand]
    protected virtual async Task GoBackAsync()
    {
        if (IsBusy) return;
        
        try
        {
            IsBusy = true;
            await NavigationService.GoBackAsync();
        }
        finally
        {
            IsBusy = false;
        }
    }
}
