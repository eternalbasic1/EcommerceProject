// import React from 'react'
// import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
// import Home from './core/Home'

// export default function Routes() {
//   return (
//     createBrowserRouter(
//         createRoutesFromElements(
//             <Route path="/" element={<Home/>}/>
//         )
//     )
//   )
// }



// TODO: CheckOnce Again 

// import React from 'react';
// import { createBrowserRouter} from 'react-router-dom';

// import Home from './core/Home'


// const Routes = createBrowserRouter([
//   {
//     path: "/",
//     element:<Home/>,
//   },
// ]);

// export default Routes;


//TODO: Just Trail 

import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Home from './core/Home'
import Signin from './core/Signin'
import Signup from './core/Signup'

const RoutesFile  = 
    createBrowserRouter(
      createRoutesFromElements(
        <>
            <Route path="/" element={ <Home/> } />
            <Route path="/signin" element={ <Signin/> } />
            <Route path="/signup" element={ <Signup/> } />
        </>
        
      )
    );

export default RoutesFile;
