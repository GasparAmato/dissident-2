import React from 'react'
import { Link} from 'react-router-dom';


const CartItem = ({name, price, amount, img, id, link, handleRemoveFromCart}) => {

const handlerOnClick  = () => {
    handleRemoveFromCart(id)
} 

    return(
        <>
        <div className="CartItemContainer">

        <img className="CartItemImg" src={img} alt="" />

        <div className="CartItemDataContainer" >
            <div>
        <div>Name: {name}</div>
        <div>Amount: {amount}</div>
        <div>Total price: {price * amount}</div>

        <button className="btn btn-primary button-delete" onClick={handlerOnClick} >Delete Item</button>

        <Link to={`/categoria/${link}/${id}`}>
        <button className="btn btn-primary">Change Item</button>
        </Link>
            </div>
        </div>

        </div>
        

        </>
    )
}
export default CartItem;