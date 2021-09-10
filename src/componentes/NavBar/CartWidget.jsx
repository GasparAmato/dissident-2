import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({imgCarrito}) => {

    const { carrito } = useContext(CartContext)
    

return(
    
<ul>
<Link to="/" >    
<li>Home</li>
</Link>


<Link to="/AboutUs">
<li>About us</li>
</Link>

<Link to="/cart">
<li className="containerIconCont"><img className="iconoCarrito" src={imgCarrito} alt="" />   { carrito.length >= 1 &&   <div className="contCart"> {carrito.length} </div>     } </li>
</Link>

<Link to="/contactus" >
<li>Contact</li>
</Link>

<Link to="/categoria/men" >
<li>Men</li>
</Link>

<Link to="/categoria/women" >
<li>Women</li>
</Link>

</ul>
);
};

export default CartWidget;