export function getNextDueDate(dateStr: string): string {
  const [day, month, year] = dateStr.split('/').map(Number);
  const lastCompleted = new Date(year, month - 1, day); // month is 0-based
  const nextDue = new Date(lastCompleted);
  nextDue.setFullYear(lastCompleted.getFullYear() + 1);
  const formatted = nextDue.toLocaleDateString('en-GB'); // Output: 12/07/2026
  return formatted;
}

export function getVaccinationStatus(dueDateStr: string | null): 'completed' | 'due soon' | 'over due' {
  if (!dueDateStr) return 'over due'; // If no due date, treat as overdue

  const [day, month, year] = dueDateStr.split('/').map(Number);
  const dueDate = new Date(year, month - 1, day);
  const today = new Date();

  const diffInMs = dueDate.getTime() - today.getTime();
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 0) {
    return 'over due';
  } else if (diffInDays <= 30) {
    return 'due soon';
  } else {
    return 'completed';
  }
}