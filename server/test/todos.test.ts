import request from 'supertest';
import app from '../src/app';
import testdb from "./testdb"

describe("Test app routes", () => {
  // using In-Memory MongoDB
  beforeAll(async () => await testdb.connect())
  afterEach(async () => await testdb.clearDatabase())
  afterAll(async () => await testdb.close())

  test("Todo CRUD", async () => {
    const todo = request(app)

    await todo.get("/todos").then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual([])
    })

    await todo.post("/todos").type("form")
      .send({ task: "Buy Apple" })

    let todoId = ""

    await todo.get("/todos").then(res => {
      console.log(res.body)
      expect(res.statusCode).toBe(200)
      expect(res.body.length).toBe(1)
      expect(res.body[0].task).toBe("Buy Apple")
      expect(res.body[0].isDone).toBe(false)
      todoId = res.body[0]._id
    })

    await todo.put(`/todos/${todoId}`).type("form")
      .send({ task: "Buy Orange" })

    await todo.get(`/todos/${todoId}`).then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body.task).toBe("Buy Orange")
      expect(res.body.isDone).toBe(false)
    })

    await todo.delete(`/todos/${todoId}`).then(res => {
      expect(res.statusCode).toBe(200)
    })

    await todo.get("/todos").then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body).toEqual([])
    })
  })
})
