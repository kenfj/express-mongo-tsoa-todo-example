# Express MongoDB TSOA Todo REST API Example

Node.js REST API sample code using followings

* Node.js & Express
* MongoDB & Mongoose
* tsoa & swagger-ui-express
  - OpenAPI-compliant REST APIs using TypeScript and Node
  - https://github.com/lukeautry/tsoa
* Jest & Supertest & mongodb-memory-server for Unit test
* All in TypeScript

## Sample API

* hello: Simple and Minimalism sample API
* todos: TSOA and Swagger based simple Todo CRUD

## Setup

```bash
cd server
npm init --yes

npm install --save-dev typescript @types/node
npx tsc --init

npm install --save-dev eslint
npx eslint --init
# this will suggest to install
# @typescript-eslint/parser @typescript-eslint/eslint-plugin

npm install --save-dev jest @types/jest ts-jest
npx ts-jest config:init

npm install express
npm install --save-dev @types/express

npm install --save-dev tsc-watch # c.f. ts-node-dev
npm install --save-dev supertest @types/supertest

npm install mongoose
npm install --save-dev @types/mongoose

# In-Memory MongoDB
# https://github.com/nodkz/mongodb-memory-server
npm install --save-dev mongodb-memory-server

npm install tsoa swagger-ui-express
npm install --save-dev @types/swagger-ui-express
npx tsc --init
```

## Run Server and Test

* start local MongoDB [mongodb/README](mongodb/README.md)

```bash
npm run dev
open http://127.0.0.1:3000/

curl 127.0.0.1:3000/hello?name=Alice
curl -X POST 127.0.0.1:3000/hello -d "name=Bob"
curl 127.0.0.1:3000/hello

npm run test

npm run test:coverage
open coverage/lcov-report/index.html
```

## REST API Framework TSOA + Swagger Doc

* REST API framework + swagger spec generator
  - https://tsoa-community.github.io/docs/getting-started.html
* `tsoa spec-and-routes` will generate `routes.ts`
  - c.f. `npm run dev` in `package.json`

```bash
npm run dev

# run test from swagger doc
open http://127.0.0.1:3000/docs
```

## Reference

* expressの開発にTypeScriptを利用する
  - https://qiita.com/zaburo/items/69726cc42ef774990279
* TypeScript で Express サーバを実装するためのボイラープレートを作った
  - https://neos21.net/blog/2020/06/13-01.html
* Node.js + Express + TypeScript: Unit Tests with Jest
  - https://losikov.medium.com/part-4-node-js-express-typescript-unit-tests-with-jest-5204414bf6f0
* TypeScriptの環境: tsc-watch で ts ファイルの変更監視＆アプリの再起動を自動化する
  - https://maku.blog/p/nxzsnkf/
* express と jest だけでサックリとテストを書く！
  - https://www.agent-grow.com/self20percent/2019/03/25/only-express-and-jest-testing/
* Configure Jest - TypeScript - Node.js - Express
  - https://www.youtube.com/watch?v=M-8i6bJRK4k
* Jestを使ってみてのハマりどころメモ
  - https://lealog.hateblo.jp/entry/2017/11/16/172815
* jestでモックしてみたメモ
  - https://qiita.com/souhei-etou/items/3b93b529137c21563a0f
* 2.4 Saving to a Database - Working with Data and APIs in JavaScript
  - using NeDB (subset of MongoDB)
  - https://www.youtube.com/watch?v=xVYa20DCUv0
* Express + TypeScript + Mongo Part 4 - Swagger
  - https://www.youtube.com/watch?v=f3Txr6arSDI
* MongoDB + Jestのテスト方法
  - https://blog.koh.dev/2019-06-11-mongodb-jest/
* Unit Testing Node.js + Mongoose Using Jest
  - https://javascript.plainenglish.io/unit-testing-node-js-mongoose-using-jest-106a39b8393d
