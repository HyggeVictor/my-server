import { Request, Response } from "express";
import {
  findNotes,
  findNoteById,
  removeNoteById,
  insertNote,
  updateNoteById,
} from "../models/notes";

export function getNotes(req: Request, res: Response): void {
  res.status(200).render("notes/index", { notes: findNotes() });
}
export function createNote(req: Request, res: Response): void {
  res.status(200).render("notes/create");
}
export function updateNote(req: Request, res: Response): void {
  const id = parseInt(req.params.id, 10);

  res.status(200).render("notes/update", { note: findNoteById(id) });
}
