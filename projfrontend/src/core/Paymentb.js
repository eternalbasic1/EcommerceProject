// import React, {useState,useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import { isAuthenticated } from '../auth/helper'
// import { cartEmpty, loadCart } from './helper/cardHelper'
// import { createOrder } from './helper/orderHelper'
// import { getmeToken, processPayment } from './helper/paymentbhelper'


// import DropIn from "braintree-web-drop-in-react";


// const Paymentb = ({products, setReload = f => f, reload = undefined}) => {
//     const [info, setInfo] = useState({
//         loading: false,
//         success:false,
//         clientToken: null,
//         error: "",
//         instance: {}
//     });

//     const userId = isAuthenticated() && isAuthenticated().user._id;
//     const token = isAuthenticated() && isAuthenticated().token;
//     console.log(userId);
//     console.log(token);

//     const getToken = (userId, token) => {
//         getmeToken(userId,token).then(info => {
//             // console.log("THE INFORMATION", info);
//             if(info.error){
//                 setInfo({...info, error: info.error})
//             }else{
//                 const clientToken = info.clientToken;
//                 setInfo({clientToken})
//             }
//         })
//     }

//     const showbtdropIn = () => {
//         return(
//             <div className='row text-center'>
//                 {info.clientToken !== null && products.length > 0 ? (
//                     <div className='col-9'>
//                     <DropIn
//                       options={{ authorization: info.clientToken }}
//                       onInstance={(instance) => (info.instance = instance)}
//                     />
//                     <div className='d-grid gap-2'> 
//                     <button className='btn btn-success' onClick={onPurchase}>Buy</button>
//                     </div>
//                   </div>
//                 ): (<h3> Please Log In or add something to cart</h3>)}
//             </div>
//         )
//     }

//     useEffect(() => {
//      getToken(userId,token)
//     }, []);
    

//     const onPurchase = () => {
//         setInfo({...info,loading:true});
//         console.log("THE INFO WAS ",info)
//         let nounce
//         info.instance
//             .requestPaymentMethod()
//             .then(data => {
//                 nounce = data.nounce
//                 const paymentData = {
//                     paymentMethodNounce : nounce,
//                     amount: getAmount(),
//                 };
//             processPayment(userId, token, paymentData)
//             .then(response => {
//                 console.log("THE RESPONSE WAS", response);
//                 setInfo({...info,success: response.success, loading:false})
//                 console.log("PAYMENT SUCCESS")
//                 console.log(info)
//                 //TODO: empty the cart
//                 cartEmpty(() => {
//                     console.log("DID we Crash")
//                 })
//                 // TODO: force reload
//                 setReload(!reload);
//             }).catch(err => {
//                 setInfo({loading:false, success:false})
//                 console.log("PAYMENT FAILED")
                
//             })
//             })
//     }
  
//     const getAmount = () => {
//         let amount = 0;
//         products.map(p => {
//             amount = amount + p.price
//         })
//         return amount;
//     }

//     return (
//     <div>
//         <h3>Your Bill is {getAmount()} </h3>
//         {showbtdropIn()}
//     </div>
//   )
// }

// export default Paymentb;