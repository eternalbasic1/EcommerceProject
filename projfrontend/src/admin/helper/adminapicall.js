import { json } from "react-router-dom";
import { API } from "../../backend";



//category calls
export const createCategory = (userId,token,category) =>{
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

//Get all categories
export const getCategories = () => {
    return fetch(`${API}/categories`,{
        method:"GET"
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    });
}


//product calls 
// Create a Product
export const createProduct = (userId,token,product) => {
    return fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

//Get all products
export const getProducts = () => {
    return fetch(`${API}/products`,{
        method:"GET"
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err);
    });
};

//delete a product 
export const deleteProduct = (productId,userId,token,product) => {
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}


//get a product
export const getProduct = productId => {
    //console.log('admin Api', productId)
    //const productIDasstring = (productId);
    //console.log("Stringify product Id", productIDasstring);
    return fetch(`${API}/product/${productId}`,{
        method:"GET"
    }).then(response => {
        console.log(response);
        return response.json();
    }).catch(err => {
        //console.error('The ERRRRORR is ',err)
        console.log('The ERRRRORR is IS',err);
    });
};


//update a product
export const updateProduct = (productId,userId,token,product) =>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            Authorization:`Bearer ${token}`
        },
        body: product
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}
