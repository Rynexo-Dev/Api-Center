import express from "express"
import { handleApi } from "../controller/Navbar.controller.js"

const router = express.Router()

router.post("/navbar", handleApi)

export default router