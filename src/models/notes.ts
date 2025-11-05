import db from "../db";

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export function getNotes(): Note[] {
  const stmt = db.prepare("SELECT * FROM notes");
  const rows = stmt.all();
  const notes: Note[] = rows.map((row: any) => ({
    id: row.id,
    title: row.title,
    content: row.content,
    createdAt: new Date(row.created_at),
    updatedAt: new Date(row.updated_at),
  }));
  return notes;
}
