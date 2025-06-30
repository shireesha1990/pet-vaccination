import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'database.sqlite');
const db = new Database(dbPath);
console.log('Using DB file:', dbPath);  

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS vaccinations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    vaccine_name TEXT NOT NULL,
    status TEXT NOT NULL,
    last_completed DATE NOT NULL,
    next_due_date DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;