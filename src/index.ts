import express from 'express';
import logger from 'morgan';

const app = express()
app.use(logger('dev'))


const Port = 5000;
app.listen(Port, ()=>{
    console.log(`Server running on http://localhost:${Port}`)
})