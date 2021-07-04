import mongoose from "mongoose";

// https://mongoosejs.com/docs/

interface Hello {
  name: string
}

const HelloSchema = new mongoose.Schema<Hello>({
  name: { type: String, required: true }
})

const HelloModel = mongoose.model<Hello>('Hello', HelloSchema)

export { Hello, HelloModel }
