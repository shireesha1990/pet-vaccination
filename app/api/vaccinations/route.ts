import { NextResponse, NextRequest } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  const data = [
    {
      name: "Rabies",
      status: "completed",
      lastCompleted: "15/03/2025",
      dueDate: "15/03/2026"
    },
    {
      name: "Leptospirosis",
      status: "completed",
      lastCompleted: "10/10/2024",
      dueDate: "10/10/2025"
    },
    {
      name: "Parvovirus",
      status: "due soon",
      lastCompleted: "30/06/2024",
      dueDate: "30/06/2025"
    },
    {
      name: "Kennel Cough",
      status: "over due",
      lastCompleted: null,
      dueDate: "15/06/2025"
    }
  ];

  return NextResponse.json(data);
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
  const next_due_date = last_completed
    ? computeDueDate(last_completed)
    : null;

  insert.run(vaccine_name,last_completed, status, next_due_date);

  return NextResponse.json({ success: true });
}

function computeDueDate(last_completed: string) {
  const [day, month, year] = last_completed.split('/').map(Number);
  const due = new Date(year + 1, month - 1, day);
  return due.toLocaleDateString('en-GB'); // dd/mm/yyyy
}