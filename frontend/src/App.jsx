import { useState } from "react"
import StripeCheckout from 'react-stripe-checkout'
function App() {

  const [product, setProduct] = useState({
    name: 'stripe',
    price: 20,
    productBy: 'Stripe'
  })

  const makePayment = token =>{
    const body={
      token,
      product
    }

    const header={
      'Content-Type':'application/json'
    }

    return fetch('http://localhost:2000/payment',{
      method:'POST',
      headers:header,
      body:JSON.stringify(body)
    }).then(response =>
        console.log('res--',response)
    )
    .catch(err => console.log(err.message))
  }

  const stripePublishableKey = import.meta.env.VITE_api_key
  console.log('key--',stripePublishableKey);
  return (


    <>
      <div className="bg-black h-screen flex justify-center items-center ">
        <StripeCheckout stripeKey={stripePublishableKey} name="Stripe" token={makePayment} />
      </div>

    </>
  )
}

export default App
