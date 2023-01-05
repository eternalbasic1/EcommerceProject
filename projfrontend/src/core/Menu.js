import React from 'react';
import {NavLink} from "react-router-dom";
//import {withRouter} from "react-dom"; // This is not working check this check video 14.01

// const currentTab = (history, path) => {
//     if(history.location.pathname === path){
//         return {color: "#2ecc72"};
//     }else{
//         return {color: "#FFFFFF"};
//     }
// }

const Menu = () => (
    <div>
        <ul className="nav nav-tabs bg-dark">
             <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/'>Home</NavLink>
            </li> 
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/signin'>Signin</NavLink>
            </li> 
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/signup'>Signup</NavLink>
            </li> 
            {/* <li style = {currentTab(history,"/")} className="nav-item">
                <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li style = {currentTab(history,"/cart")} className="nav-item">
                <Link className='nav-link' to='/cart'>Cart</Link>
            </li>
            <li style = {currentTab(history,"/user/dashboard")} className="nav-item">
                <Link className='nav-link' to='/user/dashboard'>Dashboard</Link>
            </li>
            <li style = {currentTab(history,"/admin/dashboard")} className="nav-item">
                <Link className='nav-link' to='/admin/dashboard'>A. Dashboard</Link>
            </li>
            <li style = {currentTab(history,"/signup")} className="nav-item">
                <Link className='nav-link' to='/signup'>SignUp</Link>
            </li>
            <li style = {currentTab(history,"/signin")} className="nav-item">
                <Link className='nav-link' to='/signin'>SignIn</Link>
            </li>
            <li style = {currentTab(history,"/signout")} className="nav-item">
                <Link className='nav-link' to='/signout'>Sign Out</Link>
            </li> */}
        </ul>
    </div>
)


export default Menu;