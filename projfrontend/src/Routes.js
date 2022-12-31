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

import React from 'react';
import { createBrowserRouter} from 'react-router-dom';

import Home from './core/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
]);

export default router;

