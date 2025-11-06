import express, { Request, Response } from "express";
import {
  getNotes,
  getNoteById,
  deleteNoteById,
  postNote,
} from "../controllers/notes";

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.delete("/:id", deleteNoteById);
router.post("/", postNote);

export default router;
