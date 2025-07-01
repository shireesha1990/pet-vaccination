import Database from 'better-sqlite3';
import path from 'path';
import vaccinations from '@/app/data/vaccinations.json';

const dbPath = path.join(process.cwd(), 'database.sqlite');
const db = new Database(dbPath);
console.log('Using DB file:', dbPath);  

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS vaccinations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vaccine_name TEXT NOT NULL,
    status TEXT NOT NULL,
    last_completed TEXT,
    next_due_date TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

const insert = db.prepare(`
  INSERT INTO vaccinations (vaccine_name, status, last_completed,next_due_date)
  VALUES (@vaccine_name, @status, @last_completed, @next_due_date)
`);

for (const v of vaccinations) {
  insert.run(v);
}

export default db;