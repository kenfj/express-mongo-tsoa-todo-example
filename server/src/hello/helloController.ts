import { Request, Response } from 'express'
import service from './helloService'

const Get = async (req: Request, res: Response): Promise<void> => {
  console.log("Hello Get")

  const defaultNameInDB = await service.getHelloName()

  const query = req.query
  const name = (query && "name" in query) ? query.name : defaultNameInDB || "World"

  res.send({ message: `Hello ${name}!` })
}

const Post = async (req: Request, res: Response): Promise<void> => {
  console.log("Hello Post")

  const body = req.body
  const name = (body && "name" in body) ? body.name : "World"

  await service.setHelloName(name)
  res.send({ message: `Hello ${name}.` })
}

export default { Get, Post }
