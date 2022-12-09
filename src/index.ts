// import express from 'express'
// import logger from 'morgan'
import mongoose from 'mongoose'
import {ApolloServer} from 'apollo-server'
import typeDefs from './Graphql/type-def'
import resolvers from './Graphql'
import dotenv from 'dotenv'
dotenv.config()

// const app = express()
// app.use(logger('dev'))

const server = new ApolloServer({
    typeDefs,
    resolvers
})
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL!, ()=>{
    console.log(`Database connected successfully `)
})

const Port = 5000;
server.listen(Port, ()=>{
    console.log(`Server running on http://localhost:${Port}`)
})