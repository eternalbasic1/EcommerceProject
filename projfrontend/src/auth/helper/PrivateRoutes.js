import React from "react";
import { Navigate } from "react-router-dom";

 const PrivateRoutes = ({isAuthenticated, children}) => {
    if(isAuthenticated()){
        console.log("Going in ");
        return(
            <Navigate to="/" replace/>
        )
    }
    return children
   
 }

 export default PrivateRoutes;