using SmartNote.Maui.Models;

namespace SmartNote.Maui.Services;

/// <summary>
/// Tasks Service Interface
/// Manages learning tasks with CRUD operations
/// </summary>
public interface ITasksService
{
    Task<IEnumerable<TaskItem>> GetActiveTasksAsync();
    Task<IEnumerable<TaskItem>> GetCompletedTasksAsync();
    Task<IEnumerable<TaskItem>> GetTasksBySubjectAsync(string subject);
    Task<TaskItem?> GetTaskByIdAsync(int id);
    Task<TaskItem> AddTaskAsync(TaskItem task);
    Task UpdateTaskAsync(TaskItem task);
    Task DeleteTaskAsync(int id);
    Task ToggleTaskCompletionAsync(int id);
    Task<Dictionary<string, int>> GetTaskCountBySubjectAsync();
    Task<int> GetDueTodayCountAsync();
    Task<int> GetDueThisWeekCountAsync();
}

/// <summary>
/// Tasks Service Implementation
/// Provides mock data matching the original React app
/// </summary>
public class TasksService : ITasksService
{
    private readonly List<TaskItem> _tasks;
    
    public TasksService()
    {
        // Initialize with mock data matching original React implementation
        _tasks = new List<TaskItem>
        {
            new TaskItem
            {
                Id = 1,
                Title = "Chemie Kapitel 4 lernen",
                Description = "Alkene und Alkine durcharbeiten",
                Subject = "Chemie",
                DueDate = new DateTime(2025, 11, 22),
                Priority = TaskPriority.High,
                IsCompleted = false
            },
            new TaskItem
            {
                Id = 2,
                Title = "Geschichte Essay überarbeiten",
                Description = "Feedback vom Lehrer einarbeiten",
                Subject = "Geschichte",
                DueDate = new DateTime(2025, 11, 23),
                Priority = TaskPriority.High,
                IsCompleted = false
            },
            new TaskItem
            {
                Id = 3,
                Title = "Mathematik Übungsaufgaben",
                Description = "Seite 156-160 bearbeiten",
                Subject = "Mathematik",
                DueDate = new DateTime(2025, 11, 24),
                Priority = TaskPriority.Medium,
                IsCompleted = false
            },
            new TaskItem
            {
                Id = 4,
                Title = "Biologie Präsentation vorbereiten",
                Description = "Folien zu Zellorganellen erstellen",
                Subject = "Biologie",
                DueDate = new DateTime(2025, 11, 25),
                Priority = TaskPriority.Medium,
                IsCompleted = false
            },
            new TaskItem
            {
                Id = 5,
                Title = "Physik Hausaufgaben",
                Description = "Aufgaben 1-5 lösen",
                Subject = "Physik",
                DueDate = new DateTime(2025, 11, 26),
                Priority = TaskPriority.Low,
                IsCompleted = false
            },
            new TaskItem
            {
                Id = 6,
                Title = "Chemie Notizen digitalisieren",
                Description = "Alle handschriftlichen Notizen scannen",
                Subject = "Chemie",
                DueDate = new DateTime(2025, 11, 20),
                Priority = TaskPriority.Low,
                IsCompleted = true
            }
        };
    }
    
    public Task<IEnumerable<TaskItem>> GetActiveTasksAsync()
    {
        return Task.FromResult(_tasks
            .Where(t => !t.IsCompleted)
            .OrderBy(t => t.DueDate)
            .AsEnumerable());
    }
    
    public Task<IEnumerable<TaskItem>> GetCompletedTasksAsync()
    {
        return Task.FromResult(_tasks
            .Where(t => t.IsCompleted)
            .OrderByDescending(t => t.DueDate)
            .AsEnumerable());
    }
    
    public Task<IEnumerable<TaskItem>> GetTasksBySubjectAsync(string subject)
    {
        return Task.FromResult(_tasks
            .Where(t => t.Subject == subject)
            .OrderBy(t => t.DueDate)
            .AsEnumerable());
    }
    
    public Task<TaskItem?> GetTaskByIdAsync(int id)
    {
        return Task.FromResult(_tasks.FirstOrDefault(t => t.Id == id));
    }
    
    public Task<TaskItem> AddTaskAsync(TaskItem task)
    {
        task.Id = _tasks.Max(t => t.Id) + 1;
        _tasks.Add(task);
        return Task.FromResult(task);
    }
    
    public Task UpdateTaskAsync(TaskItem task)
    {
        var existing = _tasks.FirstOrDefault(t => t.Id == task.Id);
        if (existing != null)
        {
            existing.Title = task.Title;
            existing.Description = task.Description;
            existing.Subject = task.Subject;
            existing.DueDate = task.DueDate;
            existing.Priority = task.Priority;
            existing.IsCompleted = task.IsCompleted;
        }
        return Task.CompletedTask;
    }
    
    public Task DeleteTaskAsync(int id)
    {
        var task = _tasks.FirstOrDefault(t => t.Id == id);
        if (task != null)
        {
            _tasks.Remove(task);
        }
        return Task.CompletedTask;
    }
    
    public Task ToggleTaskCompletionAsync(int id)
    {
        var task = _tasks.FirstOrDefault(t => t.Id == id);
        if (task != null)
        {
            task.IsCompleted = !task.IsCompleted;
        }
        return Task.CompletedTask;
    }
    
    public Task<Dictionary<string, int>> GetTaskCountBySubjectAsync()
    {
        var counts = _tasks
            .Where(t => !t.IsCompleted)
            .GroupBy(t => t.Subject)
            .ToDictionary(g => g.Key, g => g.Count());
        return Task.FromResult(counts);
    }
    
    public Task<int> GetDueTodayCountAsync()
    {
        var today = DateTime.Today;
        return Task.FromResult(_tasks.Count(t => !t.IsCompleted && t.DueDate.Date == today));
    }
    
    public Task<int> GetDueThisWeekCountAsync()
    {
        var today = DateTime.Today;
        var endOfWeek = today.AddDays(7 - (int)today.DayOfWeek);
        return Task.FromResult(_tasks.Count(t => !t.IsCompleted && t.DueDate.Date <= endOfWeek));
    }
}
