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
