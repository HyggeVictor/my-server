import { Request, Response } from "express";
import { findNotes, findNoteById } from "../models/notes";

export function getNotes(req: Request, res: Response) {
  const notes = findNotes();
  res.json(notes);
}

export function getNoteById(req: Request, res: Response) {
  const id = parseInt(req.params.id, 10);
  const note = findNoteById(id);
  res.json(note);
}
