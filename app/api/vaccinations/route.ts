import { NextResponse, NextRequest } from 'next/server';
import db from '@/lib/db';

// export async function GET() {
//   const data = [
//     {
//       name: "Rabies",
//       status: "completed",
//       lastCompleted: "15/03/2025",
//       dueDate: "15/03/2026"
//     },
//     {
//       name: "Leptospirosis",
//       status: "completed",
//       lastCompleted: "10/10/2024",
//       dueDate: "10/10/2025"
//     },
//     {
//       name: "Parvovirus",
//       status: "due soon",
//       lastCompleted: "30/06/2024",
//       dueDate: "30/06/2025"
//     },
//     {
//       name: "Kennel Cough",
//       status: "over due",
//       lastCompleted: null,
//       dueDate: "15/06/2025"
//     }
//   ];

//   return NextResponse.json(data);
// }

export async function GET() {
  try {
    const stmt = db.prepare('SELECT * FROM vaccinations');
    const vaccinations = stmt.all();

    return NextResponse.json(vaccinations);
  } catch (error) {
    console.error('DB error:', error);
    return NextResponse.json({ error: 'Failed to fetch vaccinations' }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  const body = await req.json();
  const { vaccine_name, last_completed } = body; 

  if (!vaccine_name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }

  const insert = db.prepare(`
    INSERT INTO vaccinations (vaccine_name, last_completed, status, next_due_date)
    VALUES (?, ?, ?, ?)
  `);

  const status = last_completed ? 'completed' : 'over due';
  const next_due_date = calculateNextDueDate(last_completed);
  console.log(last_completed);
  insert.run(vaccine_name,last_completed, status, next_due_date);

  return NextResponse.json({ success: true });
}

function calculateNextDueDate(dateStr: string): string | null {
  const [day, month, year] = dateStr.split('/').map(Number);

  // Create date object from parts
  const lastCompleted = new Date(year, month - 1, day); // month is 0-based

  // Add 1 year
  const nextDue = new Date(lastCompleted);
  nextDue.setFullYear(lastCompleted.getFullYear() + 1);

  // Format as dd/mm/yyyy
  const formatted = nextDue.toLocaleDateString('en-GB'); // Output: 12/07/2026
  return formatted;
}