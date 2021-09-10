import React from 'react'



const InfoItem = ({name, price, amount, img,}) => {

    return(
        <>
        <div className="CartItemContainer">

        <img className="CartItemImg" src={img} alt="" />

        <div className="CartItemDataContainer" >
            <div>
        <div>Name: {name}</div>
        <div>Amount: {amount}</div>
        <div>Total price: {price * amount}</div>

       
            </div>
        </div>

        </div>
        

        </>
    )
}
export default InfoItem;