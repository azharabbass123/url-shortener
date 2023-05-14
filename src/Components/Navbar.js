import logo from "../images/logo.png"
//import { useState } from "react";
import {Link, Outlet} from "react-router-dom"
function Navbar(){
    return(
        <>
        <div className="topnav">
            <img className="logo" src={logo} alt="logo"></img>
            <Link id="navItem" to="/history">History</Link>
            <Link id="navItem" className="active" to="/">Home</Link>
        </div>
        <Outlet />
        </>
    )
}
export default Navbar;