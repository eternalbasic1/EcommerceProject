import React from 'react';
import {NavLink} from "react-router-dom";

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
                className='nav-link' to='/cart'>Cart</NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/user/dashboard'>Dashboard</NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/admin/dashboard'>A. Dashboard</NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/signup'>SignUp</NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/signin'>SignIn</NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                style={({isActive})=>({
                    color: isActive? "#2ecc72" :"#FFFFFF",
                })}
                className='nav-link' to='/signout'>Sign Out</NavLink>
            </li>
        </ul>
    </div>
)


export default Menu;