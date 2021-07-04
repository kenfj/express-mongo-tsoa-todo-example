import { Todo, TodoModel } from "./todoModel";

// A post request should not contain an id.
export type TodoCreationParams = Pick<Todo, "task">

export class TodosService {
  public async get(id: string): Promise<Todo | null> {
    return TodoModel.findById(id).exec()
  }

  public async getAll(): Promise<Todo[]> {
    return TodoModel.find({})
  }

  public async create(todoCreationParams: TodoCreationParams): Promise<Todo> {
    const item = {
      isDone: false,
      ...todoCreationParams,
    }
    return new TodoModel(item).save()
  }

  public async update(id: string, task: string): Promise<Todo | null> {
    return TodoModel.findByIdAndUpdate(id, { task })
  }

  public async delete(id: string): Promise<Todo | null> {
    return TodoModel.findByIdAndRemove(id)
  }
}
