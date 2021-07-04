import mongoose from 'mongoose';

const connectMongo = async (mongoUrl: string): Promise<void> => {
  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // https://mongoosejs.com/docs/deprecations.html#findandmodify
    useFindAndModify: false
  })
    .then(() => { console.log("Connected MongoDB") })
    .catch(err => { console.log("Error Connect MongoDB", err) })
}

const closeMongo = async (): Promise<void> => {
  await mongoose.disconnect()
}

export { connectMongo, closeMongo }
