import React from "react";
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";



const Navbar = ({logo, imgCarrito}) => {
    return (
        
    <nav>
        
        <div className="menu">
        <Link to="/">
            <img className="logo" src={logo} alt="" />
        </Link>
        <div className="section-opciones">
        
        <CartWidget imgCarrito={imgCarrito} />


  </div>
  </div>
  
    </nav>

    

    )
};

export default Navbar;