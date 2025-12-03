import express, { Request, Response } from "express";
import { getNotes, createNote } from "../controllers/notes";

const router = express.Router();

router.get("/index", getNotes);
router.get("/create", createNote);

export default router;
