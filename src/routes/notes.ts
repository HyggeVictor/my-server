import express, { Request, Response } from "express";
import { getNotes, createNote, updateNote } from "../controllers/notes";

const router = express.Router();

router.get("/index", getNotes);
router.get("/create", createNote);
router.get("/update/:id", updateNote);

export default router;
