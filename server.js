import express from "express"
import path from "node:path"
import { fileURLToPath } from "node:url"
import Navbar from "./src/Routes/Navbar.route.js"

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const templatesPath = path.join(__dirname, "src", "templates")

// Static CSS
app.use("/css", express.static(templatesPath))

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(templatesPath, "index.html"))
})

// API routes
app.use("/apis", Navbar)

if (!process.env.VERCEL) {
    const port = process.env.PORT || 3000

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`)
    })
}

export default app
