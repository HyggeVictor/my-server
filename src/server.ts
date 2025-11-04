import express, { Request, Response } from "express";
import notesRouter from "./routes/notes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/notes", notesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
