import {API} from "../../backend"

export const createOrder = (userId, token, orderData) => {
     console.log("THE orderdata is and token and userId ",  orderData);
    console.log("THE userId", userId)
    console.log("THE token is", token)
    
     return fetch(`${API}/order/create/${userId}`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : null
        },
        body: JSON.stringify({order: orderData})
    }).then(response => {
        console.log("the respose is ",response);
    }).catch(err => console.log(err));
    
}