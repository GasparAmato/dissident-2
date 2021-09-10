import React, {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import ItemCount from '../itemCount';
import {CartContext} from "../../../context/CartContext";

import Exit from'../../../assets/img/exit-img.jpg';


const ItemDetail = ({id, name, price, img,  colorName, colourStyle, link }) => {

    const [contador, setContador] = useState(0)
    const [amount, setAmount] = useState(contador)
// use Context
const {addCart, carrito} = useContext(CartContext)



const handleAdd = () => {
    addCart({
        name,
        id,
        price,
        img,
        link,
        amount : amount
    })
    console.log(carrito)
   
}

// useContext ends

    

    

    const [dis, setDis] = useState(true)
    const [disable, setDisable] = useState(false)
    const [buttonAble, setButtonAble] = useState(true)

   

    useEffect(() => {
        contador < 1?
    setButtonAble(true):setButtonAble(false )
    }, [contador])
    

    const buy = () => {
        setDisable(true)
        setDis(false)


        setAmount(contador)

    }

    const changeOrder = () => {
        setDisable(false)
        setDis(true)
    }
   


    


    const as = id;

return(
    <>
   
    {id &&
        <div className={[as, "Detail"].join(' ')} >
    
    <div className="detail-container-flex">
        <Link to={`/categoria/${link}`} >
        <img className="exit" src={Exit} alt="salir" />
        </Link>
        
            

        <div>    
            <img className="img-Detail" src={img} alt="ropa" />
                      
        </div>

        <div className="Description">
            <div>
                <div className="name"> {name}</div>
                <div className="price">$ {price}</div>
                <div className="color">COLOR: {colorName}<div className={colourStyle}></div> </div> 
                <div>Description: </div>

                {dis &&
                <ItemCount setContador={setContador}   stock={10} initial={1} />}
            <div className="flex-container">    
                {dis &&
                <button disabled={buttonAble} className="btn btn-primary"  onClick={buy }>Buy </button>}
            </div>    
            <div className="flex-container">


                {disable && 
                // <Link  to= "/cart">
                <button className="button-buy btn btn-primary" onClick={handleAdd} >Add to cart</button>
                // </Link>
                }

                {disable && 
                <button className="btn btn-primary" onClick={changeOrder}>Change order</button>
                }

            </div>    
                {disable && 
                <div>purchase: {amount} "{name}" </div>
                }

            </div>
        </div>
  
        </div>
        
        
  
</div>
 
}


</>
)
}

    export default ItemDetail;