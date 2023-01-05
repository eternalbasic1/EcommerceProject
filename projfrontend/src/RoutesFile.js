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
