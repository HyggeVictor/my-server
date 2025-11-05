import { Request, Response } from "express";
import { findNotes } from "../models/notes";

export function getNotes(req: Request, res: Response) {
  const notes = findNotes();
  res.json(notes);
}
