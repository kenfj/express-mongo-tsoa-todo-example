import { Hello, HelloModel } from "./helloModel"

// https://mongoosejs.com/docs/

const getHelloName = async (): Promise<string | null> => {
  console.log("getHelloName")

  return HelloModel.findOne().exec()
    .then(hello => {
      return hello ? hello.name : null
    }).catch(err => {
      console.log("getHelloName err", err)
      return null
    })
}

const setHelloName = async (name: string): Promise<Hello | null> => {
  console.log(`setHelloName ${name}`)

  return HelloModel.deleteMany({}).exec()
    .then(res => {
      console.log("deleteMany res:", res)
      return new HelloModel({ name: name }).save()
    }).catch(err => {
      console.log("deleteMany err:", err)
      return null
    })
}

export default { getHelloName, setHelloName }
