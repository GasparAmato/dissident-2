import React, {useState, useEffect} from 'react';
import { Route, useParams } from 'react-router';

import ItemDetail from './ItemDetail';

import { database } from '../../../firebase/fireBase'




const ItemDetailContainer = () => {
    
    const [lista, setLista] = useState([])
    const [lista2, setLista2] = useState([])
    const [conjunto, setConjunto] = useState([])

    const ropa = database.collection("ropa")

    const ropa2 = database.collection("Men")

   
    useEffect(()=> {
    ropa2.get().then((query) => setLista2(query.docs.map( (u) => u.data()) )) 
    ropa.get().then((query) => setLista(query.docs.map( (u) => u.data()) ))  
     
    console.log(conjunto)
    // eslint-disable-next-line
},[]);
    useEffect(() => {
setConjunto([...lista, ...lista2]); 
},[lista, lista2]);
    



     const { id } = useParams();             
    console.log(id)
                          


return(
<div>


{conjunto.map((u) => {
                return(

<Route key={u.id} exact path={`/${u.link}/${ u.id }`}>
<ItemDetail id={u.id} name={u.name} price={u.price} img={u.img} colorName={u.colorName} colourStyle={u.colourStyle} link={u.link} /> 
 </Route>         
 
)})
}


</div>
)
}

export default ItemDetailContainer; 