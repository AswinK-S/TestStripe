import { useState } from "react"
import StripeCheckout from 'react-stripe-checkout'
function App() {

  const [product, setProduct] = useState({
    name: 'stripe',
    price: 20,
    productBy: 'Stripe'
  })


  return (


    <>
      <div className="bg-black h-screen flex justify-center items-center ">
        <StripeCheckout stripeKey="" name="" token='' />
      </div>

    </>
  )
}

export default App
