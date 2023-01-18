import React, {useState,useEffect} from 'react'
import "../styles.css"
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/cardHelper';
import { getProducts } from './helper/coreapicalls';

const Cart = () => {

    const [reload, setReload] = useState(false);
    const [products, setProducts] = useState([]);
    
        useEffect(() => {
          setProducts(loadCart())
        }, [reload]);
        

    const loadAllProducts = () => {
        return (
            <div>
                <h2>This section is to load Products</h2>
                {products.map((product,index) => (
                    <Card
                    key={index}
                    product = {product}
                    addtoCart = {false}
                    removeFromCart = {true}
                    setReload = {setReload}
                    reload = {reload}
                    />
                ))}
            </div>
        )
    }

    const loadCheckout = () => {
        return (
            <div>
                <h2>This section is for checkout</h2>
            </div>
        )
    }


  return (
    <Base title='Cart Page' description='Ready to Checkout'>  
        <div className="row">
          <div className="col-6">{products?loadAllProducts():`This Page is empty`}</div>
          <div className="col-6">{products?loadCheckout():`This Page is empty`}</div>
        </div>
    </Base>
  ); 
}


export default Cart;