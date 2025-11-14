import express, { Request, Response } from "express";
import {
  findNotes,
  findNoteById,
  removeNoteById,
  insertNote,
  updateNoteById,
} from "../models/notes";
import { render } from "ejs";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).render("notes/index", { notes: findNotes() });
});

export default router;
