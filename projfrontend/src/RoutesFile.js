import {Route, createBrowserRouter, createRoutesFromElements, Navigate} from "react-router-dom"
import AddCategory from "./admin/AddCategory"
import AddProduct from "./admin/AddProduct"
import ManageCategories from "./admin/ManageCategories"
import { isAuthenticated } from "./auth/helper"
import AdminRoutes from "./auth/helper/AdminRoutes"
import {PrivateRoutes,PrivateRoutesUser} from "./auth/helper/PrivateRoutes"
//import Admindash from "./core/Admindash"
import Home from './core/Home'
import Signin from './core/Signin'
import Signup from './core/Signup'
import AdminDashBoard from "./user/AdminDashBoard"
import UserDashBoard from "./user/UserDashBoard"

const RoutesFile  = 
    createBrowserRouter(
      createRoutesFromElements(
        <>
            <Route path="/" element={ <Home/> } />
            <Route path="/signin" element={
            
            // PrivateRoutes
            
            <PrivateRoutes isAuthenticated={isAuthenticated}>
               <Signin/>
            </PrivateRoutes> }
             />
            <Route path="/signup" element={
            <PrivateRoutes isAuthenticated={isAuthenticated}>
               <Signup/>
            </PrivateRoutes> }
             />
            <Route path="signout" element={<Navigate replace to={"/"}/>}/>
            
            {/* AdminRoutes */}

            <Route path="/admin/dashboard" element={
            <AdminRoutes isAuthenticated={isAuthenticated}>
              <AdminDashBoard/>
            </AdminRoutes>} 
            />
            <Route path="/admin/create/category" element={
            <AdminRoutes isAuthenticated={isAuthenticated}>
              <AddCategory/>
            </AdminRoutes>} 
            />
            <Route path="/admin/categories" element={
            <AdminRoutes isAuthenticated={isAuthenticated}>
              <ManageCategories/>
            </AdminRoutes>} 
            />
            <Route path="/admin/create/product" element={
            <AdminRoutes isAuthenticated={isAuthenticated}>
              <AddProduct/>
            </AdminRoutes>} 
            />

            
            <Route path = "/user/dashboard" element={
              <PrivateRoutesUser isAuthenticated={isAuthenticated}>
                <UserDashBoard/>
              </PrivateRoutesUser>}
            />
        </>
        
      )
    );


export default RoutesFile;
