    const express = require('express')
    const cors = require('cors')
    require('dotenv').config()

    const stripe = require('stripe')(process.env.stripe_secret_key)
    const {v4:uuidv4} = require('uuid')

    const app=express()

    //middlewares
    app.use(express.json())
    app.use(cors())

    //routes


    app.get('/',(req,res)=>{
        res.send('Working')
    })

    app.post('/payment',(req,res)=>{
        const {product , token}= req.body

        const ideompotencyKey = uuidv4()
        console.log('object received from frontend---- ',req.body.product);
        console.log('ffff---',product);
        console.log('token--',token);
        
        return stripe.customers.create({
            email:token.email,
            source:token.id
        }).then(customer =>{
            stripe.charges.create({
                amount: product.price*100,
                currency : 'usd',
                customer :customer.id,
                receipt_email:token.email,
                shipping:{
                    name: token.card.name,
                    address:{
                        country: token.card.address_country
                    }
                }
            },{ideompotencyKey})
        }).then(result =>{
            console.log('result-->',result);
            res.status(200).json(result)
        }).catch(err=>{
            console.log(err.message);
        })

    })

    //listen
    app.listen(2000,()=>{
        console.log(`server running on http://localhost:2000`);
    })