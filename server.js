import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const env = loadEnv('production', process.cwd(), '')
const port = Number(env.PORT) || 3000
const parent = (env.PARENT || '/').replace(/^\/*/, '/').replace(/\/*$/, '/')

const app = express()
const dist = path.join(__dirname, 'dist')

app.use(parent, express.static(dist))
app.use(parent, (_req, res) => {
  res.sendFile(path.join(dist, 'index.html'))
})

app.listen(port, () => {
  console.log(`dorrl is listening on port ${port} at ${parent}`)
})
