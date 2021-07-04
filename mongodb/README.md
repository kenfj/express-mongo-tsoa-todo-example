# MongoDB using Docker

## Setup

* https://qiita.com/pus/items/907d3f717fd50e8cf151

```bash
# start mongodb://127.0.0.1:27017/
docker compose up -d
docker compose ps

# start MongoDB shell
docker exec -it mongodb mongo

docker exec -it mongodb mongo --eval "db.version();"
# MongoDB server version: 4.4.6

# stop
docker compose down
```

## CRUD

* https://docs.mongodb.com/manual/crud/
* https://qiita.com/Brutus/items/8a67a4db0fdc5a33d549
* `docker exec -it mongodb mongo`

```bash
use hellodb

# Create
db.hellos.insert({name: "Alice"})
db.hellos.insertMany([{name: "Bob"}, {name: "Carol"}])

# Show
show dbs
show collections

# Read
db.hellos.find()
db.hellos.findOne()

# Update
db.hellos.update({name: "Carol"}, {$set:{name: "Dave"}})

# Delete
db.hellos.deleteMany({name: "Dave"})
db.hellos.deleteMany({})
```

* Note: `db.hello()` is function
* Mongoose will use the pluralized version collection name
  - https://stackoverflow.com/questions/5794834

## Init Data

* Init Data Script: `./init_data.sh`

```bash
use tododb

# db.createCollection('todos')

db.todos.insertMany( [
    { task : "Buy Milk", isDone : true },
    { task : "Buy Banana", isDone : false }
])

db.todos.find()
db.todos.findOne()

# Buy Milk
db.todos.findOne()["task"]

# Misc command sample
db.todos.find({isDone: true}).limit(1)
db.todos.deleteOne({isDone: true})
db.todos.deleteMany({})
```
