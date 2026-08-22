import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

import Navbar from "./src/Routes/Navbar.route.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templatesPath = path.join(__dirname, "src", "templates");


/* HTML */
app.get("/", (req, res) => {
    res.sendFile(path.join(templatesPath, "index.html"));
});


/* CSS */
app.use(
    "/css",
    express.static(templatesPath)
);


/* API */
app.use("/apis", Navbar);


export default app;
