import { Request, Response } from "express";
import {
  findNotes,
  findNoteById,
  removeNoteById,
  insertNote,
  updateNoteById,
} from "../models/notes";

export function getNotes(req: Request, res: Response): void {
  const notes = findNotes();
  res.status(200).json(notes);
}

export function getNoteById(req: Request, res: Response): void {
  const id = parseInt(req.params.id, 10);
  const note = findNoteById(id);
  res.status(200).json(note);
}
export function deleteNoteById(req: Request, res: Response): void {
  const id = parseInt(req.params.id, 10);
  const note = removeNoteById(id);
  res.status(200).json(note);
}
export function postNote(req: Request, res: Response): void {
  const { title, content } = req.body;
  const note = insertNote(title, content);
  res.status(201).json(note);
}
export function putNote(req: Request, res: Response): void {
  const id = parseInt(req.params.id, 10);
  const { title, content } = req.body;
  const note = updateNoteById(id, title, content);
  res.status(200).json(note);
}
