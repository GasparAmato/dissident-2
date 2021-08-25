import React  from "react";


const Item = ({id, name, price, img}) => {
    


   
    
    const as = id; 


return(
    <>
    {id &&
        <div className={[as, "card "].join(' ')} >
    <div>
        <img src={img} alt="" />
        <div className="text-item-container">
            <div className="text-item-one" >${price}</div>
            <div className="text-item-two">{name}</div>
        </div>
        
         
        

        
    </div>
</div>}
</>
)
}

    export default Item;