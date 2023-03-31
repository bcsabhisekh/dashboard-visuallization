import express from "express"
import { GetQuery, GetSpecificQuery, PostQuery } from "../controllers/functions.js";

const router = express.Router();

router.post("/add", PostQuery);
router.get("/", GetQuery);
router.post("/filter", GetSpecificQuery);

export default router;