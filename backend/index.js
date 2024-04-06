    const express = require('express')
    const cors = require('cors')

    // const stripe = require('stripe')('')
    const {v4:uuidv4} = require('uuid')

    const app=express()

    //middlewares
    app.use(express.json())
    app.use(cors())

    //routes
    app.get('/',(req,res)=>{
        res.send('Working')
    })

    //listen
    app.listen(2000,()=>{
        console.log(`server running on http://localhost:2000`);
    })