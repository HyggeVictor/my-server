import { Request, Response } from "express";
import {
  findNotes,
  findNoteById,
  removeNoteById,
  insertNote,
  updateNoteById,
} from "../models/notes";

export function getNotes(req: Request, res: Response): void {
  try {
    const notes = findNotes();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error getting notes" });
  }
}

export function getNoteById(req: Request, res: Response): void {
  const id = parseInt(req.params.id, 10);
  try {
    const note = findNoteById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error getting the note" });
  }
}
export function deleteNoteById(req: Request, res: Response): void {
  const id = parseInt(req.params.id, 10);
  try {
    const note = removeNoteById(id);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error deleting the note" });
  }
}
export function postNote(req: Request, res: Response): void {
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(400).json({ message: "Title and content are required" });
    return;
  }
  try {
    const note = insertNote(title, content);
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error creating the note" });
  }
}
export function putNote(req: Request, res: Response): void {
  const id = parseInt(req.params.id, 10);
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(400).json({ message: "Title and content are required" });
    return;
  }
  try {
    const note = updateNoteById(id, title, content);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "Error updating the note" });
  }
}
