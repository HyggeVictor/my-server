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
