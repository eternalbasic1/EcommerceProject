import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/helper'
import { cartEmpty, loadCart } from './helper/cardHelper'
import StripeCheckoutButton from 'react-stripe-checkout'

const StripeCheckout = ({
    products, 
    setReload= f => f ,
    reload= undefined
    }) => {
  
    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
        address: ""
    });

    const token = isAuthenticated() && isAuthenticated().token;
    const userId = isAuthenticated() && isAuthenticated().user._id;

    // const getFinalPrice = () => {
    //     return products.reduce((currentValue, nextValue) => {
    //         return currentValue + nextValue.count + nextValue;
    //     },0);
    // };

    const getFinalAmount = () => {
        let amount = 0 ;
        products.map(p => {
            amount = amount + p.price;
        });
        return amount;
    }

    const makePayment = () => {
        //
    }

    const showStripeButton = () => {
        return isAuthenticated() ? (
            <StripeCheckoutButton
            stripeKey=''
            token={makePayment}
            amount={getFinalAmount() * 100}
            name="Buy TShirts"
            shippingAddress
            billingAddress
            >
                <button className='btn btn-success'>Pay with Stripe</button>
            </StripeCheckoutButton>
        ): (
            <Link to={"/signin"}>
                <button className="btn btn-warning">Signin</button>
            </Link>
        )
    }

    return (
    <div className='text-center'>
        <h3 className="text-white">Stripe Checkout {getFinalAmount()}</h3>
        {showStripeButton()}
    </div>
  )
}

export default StripeCheckout;