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
  const stmt = db.prepare("SELECT * FROM notes");
  const rows = stmt.all() as Row[];
  const notes: Note[] = rows.map(mapRowToNote);
  return notes;
}
export function findNoteById(id: number): Note {
  const stmt = db.prepare("SELECT * FROM notes WHERE id = ?");
  const row = stmt.get(id) as Row;
  const note = mapRowToNote(row);
  return note;
}
export function removeNoteById(id: number): Note | null {
  const note = db.prepare("SELECT * FROM notes WHERE id = ?").get(id) as Row;
  if (!note) return null;
  db.prepare("DELETE FROM notes WHERE id = ?").run(id);

  return mapRowToNote(note);
}
export function insertNote(title: string, content: string): Note {
  const stmt = db
    .prepare("INSERT INTO notes (title, content) VALUES (?, ?)")
    .run(title, content);
  const note = db
    .prepare("SELECT * FROM notes WHERE id = ?")
    .get(stmt.lastInsertRowid) as Row;
  return mapRowToNote(note);
}
