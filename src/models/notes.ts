import db from "../db";

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
interface Row {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`
).run();

function mapRowToNote(row: Row): Note {
  return {
    id: row.id,
    title: row.title,
    content: row.content,
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at),
  };
}

export function findNotes(): Note[] {
  const stmt = db.prepare(`
    SELECT * FROM notes
  `);
  const rows = stmt.all() as Row[];
  const notes = rows ? rows.map(mapRowToNote) : [];
  return notes;
}
export function findNoteById(id: number): Note | null {
  const stmt = db.prepare(`
    SELECT * FROM notes
    WHERE id = ?
  `);
  const row = stmt.get(id) as Row;
  const note = row ? mapRowToNote(row) : null;

  return note;
}
export function removeNoteById(id: number): Note | null {
  const stmt = db.prepare(`
    DELETE FROM notes
    WHERE id = ?
    RETURNING *
  `);
  const row = stmt.get(id) as Row;
  const note = row ? mapRowToNote(row) : null;

  return note;
}
export function insertNote(title: string, content: string): Note {
  const stmt = db.prepare(`
      INSERT INTO notes (title, content)
      VALUES (?, ?)
      RETURNING *
    `);
  const row = stmt.get(title, content) as Row;
  const note = mapRowToNote(row);

  return note;
}
export function updateNoteById(
  id: number,
  title: string,
  content: string
): Note | null {
  const stmt = db.prepare(`
    UPDATE notes
    SET title = ?, content = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
    RETURNING *
  `);
  const row = stmt.get(title, content, id) as Row;
  const note = row ? mapRowToNote(row) : null;

  return note;
}
