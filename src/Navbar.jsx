import React from "react";
import { NavLink } from "react-router-dom/";
function Navbar()
{
    return(
        <>
             <nav className="navbar navbar-expand-sm text-center fixed-top" style={{backgroundColor:"#f1fbbd"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" to="" style={{color:"#34704a"}}>TSP</a>
                </div>
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#order-now" style={{color:"#34704a"}}><b>Order Now</b></a>
                </li>
                <li className="nav-item">
                    <a href="#contact-us" style={{color:"#34704a"}}><b>Contact Us</b></a>
                </li>
                <li className="nav-item">
                    <a style={{color:"#34704a"}}><b>Log In</b></a>
                </li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;