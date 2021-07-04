import app from './app'
import { connectMongo } from './lib/mongoHelper'
import mongoose from 'mongoose';

const port = process.env.PORT || 3000
const database = "tododb"
const mongoUrl = `mongodb://127.0.0.1:27017/${database}`

app.listen(port, () => {
  console.log(`Started at http://127.0.0.1:${port}`)
  connectMongo(mongoUrl)

  mongoose.connection.on('open', () => {
    console.log("Mongo Connected")
  })
  mongoose.connection.on('error', () => {
    console.log("Error Mongo Connect")
  })
})
