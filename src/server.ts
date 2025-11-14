import express, { Request, Response } from "express";
import notesApiRouter from "./routes/notesApi";
import notesRouter from "./routes/notes";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use(express.json());

app.use("/api/notes", notesApiRouter);
app.use("/notes", notesRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
