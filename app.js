const {request} =require('express')
const express = require('express');
const app = express();

const logger = require('./utility/logger')

app.use((request,response,next) => {
    // console.log(request.url)
    logger.info(request.url)
    logger.warn('this is warning')
    logger.error('this is error')
    next()
})

app.get('/books',(request,response,next) => {
    console.log(request.url)
    response.status(200).json({route:request.url})
    next()
})
app.get('/libraries',(request,response,next) => {
    console.log(request.url)
    response.status(200).json({route:request.url,Permission:true})
    next()
})
app.get('/authors',(request,response,next) => {
    console.log(request.url)
    response.status(200).json({route:request.url,Permission:true})
    next()
})


module.exports =app;