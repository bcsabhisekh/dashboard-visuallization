import express from "express"
import { GetQuery, PostQuery } from "../controllers/functions.js";

const router = express.Router();

router.post("/add", PostQuery);
router.get("/", GetQuery);

export default router;