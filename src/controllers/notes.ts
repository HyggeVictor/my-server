import { Request, Response } from "express";
import {
  findNotes,
  findNoteById,
  removeNoteById,
  insertNote,
} from "../models/notes";

export function getNotes(req: Request, res: Response): void {
  const notes = findNotes();
  res.json(notes);
}

export function getNoteById(req: Request, res: Response): void {
  const id = parseInt(req.params.id, 10);
  const note = findNoteById(id);
  res.json(note);
}
export function deleteNoteById(req: Request, res: Response): void {
  const id = parseInt(req.params.id, 10);
  const note = removeNoteById(id);
  res.status(204).send(note);
}
export function postNote(req: Request, res: Response): void {
  const { title, content } = req.body;
  const note = insertNote(title, content);
  res.status(201).json(note);
}
