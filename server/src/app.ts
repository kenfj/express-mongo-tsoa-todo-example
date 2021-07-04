import express, { Request, Response, Router } from 'express';
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes";
import hello from './hello/helloController';

const app = express()

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

const router = Router()

router.get('/hello', hello.Get)
router.post('/hello', hello.Post)

app.use("/", router)

// Supercharging our developer experience with SwaggerUI
// https://tsoa-community.github.io/docs/live-reloading.html#supercharging-our-developer-experience-with-swaggerui
app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
  return res.send(
    swaggerUi.generateHTML(await import("./swagger.json"))
  )
})
RegisterRoutes(app)

export default app
