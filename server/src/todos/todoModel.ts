import mongoose, { Schema } from "mongoose";

// Note: id virtual getter by default
// https://stackoverflow.com/a/34424834

interface Todo {
  id: string
  task: string
  isDone: boolean
}

const TodoSchema = new Schema<Todo>({
  id: { type: String, required: false },
  task: { type: String, required: true },
  isDone: { type: Boolean, default: false }
})

const TodoModel = mongoose.model<Todo>('Todo', TodoSchema)

export { Todo, TodoModel }
