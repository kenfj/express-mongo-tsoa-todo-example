import { Body, Controller, Delete, Get, Path, Post, Put, Route, SuccessResponse } from "tsoa";
import { Todo } from "./todoModel";
import { TodoCreationParams, TodosService } from "./todosService";

@Route("todos")
export class TodosController extends Controller {
  @Get("{id}")
  public async getTodo(@Path() id: string): Promise<Todo | null> {
    console.log(`getTodo: ${id}`)

    return new TodosService().get(id)
      .catch(err => {
        console.log("Error getTodo", err)
        return null
      })
  }

  @Get()
  public async getAll(): Promise<Todo[]> {
    console.log("getAll")

    return new TodosService().getAll()
      .catch(err => {
        this.setStatus(500)
        console.error("Error getAll", err)
        return [] as Todo[]
      })
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createTodo(@Body() requestBody: TodoCreationParams): Promise<Todo | null> {
    console.log(`createTodo: ${requestBody.task}`)

    this.setStatus(201) // set return status 201
    return new TodosService().create({ task: requestBody.task })
      .catch(err => {
        console.log("Error createTodo", err)
        return null
      })
  }

  @Put("{id}")
  public async updateTodo(@Path() id: string, @Body() requestBody: TodoCreationParams): Promise<Todo | null> {
    console.log(`updateTodo: ${id} ${requestBody.task}`)

    return new TodosService().update(id, requestBody.task)
      .catch(err => {
        console.log("Error updateTodo", err)
        return null
      })
  }

  @Delete("{id}")
  public async deleteTodo(@Path() id: string): Promise<Todo | null> {
    console.log(`deleteTodo: ${id}`)

    return new TodosService().delete(id)
      .catch(err => {
        console.log("Error deleteTodo", err)
        return null
      })
  }
}
