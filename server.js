import express from "express";
import Navbar from "./src/Routes/Navbar.route.js";

const app = express();

app.use("/apis", Navbar);

export default app;
