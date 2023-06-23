import { Router } from "express";
import { pollitos } from "../controllers/pollos.controllers.js";

const router = Router();

router.get("/pollos", pollitos);


export default router;
