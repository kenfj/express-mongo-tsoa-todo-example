import request from 'supertest';
import app from '../src/app';
import testdb from "./testdb";

// using local MongoDB
// import { closeMongo, connectMongo } from '../src/lib/mongoHelper'

// beforeAll(async () => {
//   const uri = "mongodb://127.0.0.1/todotestdb"
//   await connectMongo(uri)
// })

// afterAll(() => {
//   closeMongo()
// })

// using In-Memory MongoDB
// https://blog.koh.dev/2019-06-11-mongodb-jest/
// https://javascript.plainenglish.io/unit-testing-node-js-mongoose-using-jest-106a39b8393d
describe("Test app routes", () => {
  beforeAll(async () => await testdb.connect())
  afterEach(async () => await testdb.clearDatabase())
  afterAll(async () => await testdb.close())

  test("App root", async () => {
    const res = await request(app).get("/")

    expect(res.statusCode).toBe(200)
    expect(res.text).toContain("Hello World API")
  })

  test("App hello", async () => {
    const res = await request(app).get("/hello")

    expect(res.statusCode).toBe(200)
    expect(res.text).toContain("Hello World!")

    const res2 = await request(app).post("/hello")

    expect(res2.statusCode).toBe(200)
    expect(res2.text).toContain("Hello World.")
  })

  test("Swagger doc", async () => {
    const res = await request(app).get("/docs/")

    expect(res.statusCode).toBe(200)
    expect(res.text).toContain("Swagger")
  })
})
