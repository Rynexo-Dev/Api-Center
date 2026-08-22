import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import Navbar from './src/Routes/Navbar.route.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('/', (req, res) => {
  res.sendFile('/src/templates/index.html', {root: __dirname})
}).get('/css/style.css', (req, res) => {
  res.sendFile('/src/templates/style.css', {root: __dirname})
})

app.use("/navbar", Navbar)
