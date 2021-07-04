import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// c.f.
// https://javascript.plainenglish.io/unit-testing-node-js-mongoose-using-jest-106a39b8393d

// Now need to start manually
// https://github.com/nodkz/mongodb-memory-server/discussions/458

const mongoServer = new MongoMemoryServer()

const connect = async (): Promise<void> => {
  await mongoServer.start()
  const uri = mongoServer.getUri()
  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
  await mongoose.connect(uri, mongooseOpts, err => {
    if (err) console.error(err)
  })
}

const close = async (): Promise<void> => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongoServer.stop()
}

const clearDatabase = async (): Promise<void> => {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany({})
  }
}

export default { connect, close, clearDatabase }
