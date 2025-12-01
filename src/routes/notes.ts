import express, { Request, Response } from "express";
import { getNotes } from "../controllers/notes";

const router = express.Router();

router.get("/index", getNotes);

export default router;
