import { NextResponse, NextRequest } from 'next/server';
import db from '@/lib/db';
import vaccinations  from '@/app/data/vaccinations.json'
import { getNextDueDate } from '@/app/util/helper';


export async function GET() {
  let seededData = vaccinations;
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
  const next_due_date = getNextDueDate(last_completed);
  insert.run(vaccine_name,last_completed, status, next_due_date);

  return NextResponse.json({ success: true });
}