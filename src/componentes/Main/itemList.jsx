import React from 'react';
import Item from './item';
import { Link} from 'react-router-dom';



const ItemList = ({Lista}) =>{
    


    console.log(Lista)
        
    
return(
<div className="super-container">
    <div className="card-container">
       
                   
            {Lista.map((u) => {
                return(
                <Link className="link-deco-none" key={u.id} to={`/${u.link}/${u.id}`}>            
            <Item  id={u.id} name={u.name} img={u.img} price={u.price}/>
                </Link>
            )
        })}
        
                     
      </div>
</div>
)
   
};
    
    export default ItemList;