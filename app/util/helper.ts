export function getNextDueDate(dateStr: string): string {
  const [day, month, year] = dateStr.split('/').map(Number);
  const lastCompleted = new Date(year, month - 1, day); // month is 0-based
  const nextDue = new Date(lastCompleted);
  nextDue.setFullYear(lastCompleted.getFullYear() + 1);
  const formatted = nextDue.toLocaleDateString('en-GB'); // Output: 12/07/2026
  return formatted;
}
