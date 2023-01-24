// import React, {useState,useEffect} from 'react'
// // import { Outlet } from 'react-router-dom';
// import "../styles.css"
// import Base from './Base';
// import Card from './Card';
// import { loadCart } from './helper/cardHelper';
// // import { getProducts } from './helper/coreapicalls';
// // import Paymentb from './Paymentb';
// import StripeCheckout from './StripeCheckout';

// const Cart = () => {

//     const [reload, setReload] = useState(false);
//     const [products, setProducts] = useState([]);
//     // const [showPP,setShowPP] = useState(false);
//     // const [showS,setShowS] = useState(false);

//         useEffect(() => {
//           setProducts(loadCart())
//         }, [reload]);
    
//     // const handleClickPP = () => {
//     //     setShowPP(!showPP);
//     //       };

//     // const handleClickS = () => {
//     //     setShowS(!showS);
//     // };

//     const loadAllProducts = (products) => {
//         return (
//             <div>
//                 <h2>This section is to load Products</h2>
//                 {products.map((product,index) => (
//                     <Card
//                     key={index}
//                     product = {product}
//                     addtoCart = {false}
//                     removeFromCart = {true}
//                     setReload = {setReload}
//                     reload = {reload}
//                     />
//                 ))}
//             </div>
//         )
//     }

//     // const PaypalPCheckout = () => {
//     //     return (
//     //         <div>
//     //             {/* <StripeCheckout
//     //             products = {products}
//     //             setReload = {setReload}
//     //             /> */}

//     //             <Paymentb products = {products} setReload = {setReload}/>
//     //         </div>
//     //     );
//     // }

//     const StripePCheckout = () => {
//         return (
            
//             <div>
//                 <StripeCheckout
//                 products = {products}
//                 setReload = {setReload}
//                 />

//                 {/* <Paymentb products = {products} setReload = {setReload}/> */}
//             </div>
//         );
//     }


//     const loadingCheckout = () => {
//          return (
//             <div className='d-grid gap-3'>
//                 <button type="button" className="btn btn-success" onClick={handleClickS}> Pay with Stripe</button>
//                 {showS && StripePCheckout()}
//                 <button type="button" className="btn btn-success" onClick={handleClickPP}> Pay with Paypal</button>
//                 {showPP && PaypalPCheckout()}
//                 <Outlet />
//             </div>
//          )
//     }

//   return (
//     <Base title='Cart Page' description='Ready to Checkout'>  
//         <div className="row">
//           <div className="col-6 text-center">{products.length>0 ?loadAllProducts(products):<h3>No Products in the Cart</h3>}</div>
//           <div className="col-6">{products.length>0 ?loadingCheckout():<h3>Your total Payment is: 0</h3>}</div>
//         </div>
//     </Base>
//   ); 
// }


// export default Cart;




import React, {useState,useEffect} from 'react'
import "../styles.css"
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/cardHelper';
import { getProducts } from './helper/coreapicalls';
import StripeCheckout from './StripeCheckout';

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
                <StripeCheckout
                products = {products}
                setReload = {setReload}
                />
            </div>
        );
    }


  return (
    <Base title='Cart Page' description='Ready to Checkout'>  
        <div className="row">
          <div className="col-6 text-center">{products?loadAllProducts():`This Page is empty`}</div>
          <div className="col-6">{products?loadCheckout():`This Page is empty`}</div>
        </div>
    </Base>
  ); 
}


export default Cart;