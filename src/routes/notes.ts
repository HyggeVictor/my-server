import express, { Request, Response } from "express";
import { getNotes, getNoteById } from "../controllers/notes";

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNoteById);

export default router;
