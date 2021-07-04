import { Request, Response } from 'express';
import hello from '../src/hello/helloController';
import testdb from './testdb';

// import { closeMongo, connectMongo } from '../src/lib/mongoHelper'

// using local MongoDB
// beforeAll(async () => {
//   const url = `mongodb://127.0.0.1/todos`
//   await connectMongo(url)
// })

// afterAll(() => {
//   closeMongo()
// })

// using In-Memory MongoDB
beforeAll(async () => await testdb.connect())
afterEach(async () => await testdb.clearDatabase())
afterAll(async () => await testdb.close())

describe("GET /hello", () => {
  let req: Partial<Request>
  let res: Partial<Response>
  const spySend = jest.fn()

  beforeEach(() => {
    res = {
      send: spySend
    }
  })

  test("Hello with name", async () => {
    req = { query: { name: "Foo" } }
    await hello.Get(req as Request, res as Response)

    const expResponse = { message: "Hello Foo!" }
    expect(spySend).toHaveBeenCalledWith(expResponse)
  })

  test("Hello without name", async () => {
    req = {}
    await hello.Get(req as Request, res as Response)

    const expResponse = { message: "Hello World!" }
    expect(spySend).toHaveBeenCalledWith(expResponse)
  })
})

describe("POST /hello", () => {
  let req: Partial<Request>
  let res: Partial<Response>
  const spySend = jest.fn()

  beforeEach(() => {
    res = {
      send: spySend
    }
  })

  test("Hello with name", async () => {
    req = { body: { name: "Foo" } }
    await hello.Post(req as Request, res as Response)

    const expResponse = { message: "Hello Foo." }
    expect(spySend).toHaveBeenCalledWith(expResponse)
  })

  test("Hello without name", async () => {
    req = {}
    await hello.Post(req as Request, res as Response)

    const expResponse = { message: "Hello World." }
    expect(spySend).toHaveBeenCalledWith(expResponse)
  })
})
