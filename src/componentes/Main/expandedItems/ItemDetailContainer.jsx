import React, {useState, useEffect} from 'react';
import { Route, useParams } from 'react-router';

import ItemDetail from './ItemDetail';

import { database } from '../../../firebase/fireBase'




const ItemDetailContainer = () => {
    
    const [lista, setLista] = useState([])
    

    const ropa = database.collection("ropa")

    

   
    useEffect(()=> {
   
    ropa.get().then((query) => setLista(query.docs.map( (u) => u.data()) ))  
     
    
    // eslint-disable-next-line
},[lista]);
   
    



     const { id, category } = useParams();             
    console.log(id)
    console.log(category)
                          


return(
<div>


{lista.map((u) => {
                return(

<Route key={u.id} exact path={`/categoria/${u.link}/${ u.id }`}>
<ItemDetail id={u.id} name={u.name} price={u.price} img={u.img} colorName={u.colorName} colourStyle={u.colourStyle} link={u.link} /> 
 </Route>         
 
)})
}


</div>
)
}

export default ItemDetailContainer; 