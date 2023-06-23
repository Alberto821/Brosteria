import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import pollos from "./routes/pollos.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(pollos);
app.listen(PORT);
console.log("Servidor ejecutando en puerto", PORT);
