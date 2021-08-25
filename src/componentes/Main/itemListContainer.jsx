import  {useState, useEffect} from 'react'
import ItemList from './itemList'

import { database } from '../../firebase/fireBase'

import LogoWomen from '../../assets/img/logo-women.jpg'



const ItemListContainer = () => {

    const [lista, setLista] = useState([])

    const ropa = database.collection("ropa")

                        useEffect(()=> {
                             // eslint-disable-next-line 
                        ropa.get().then((query) => setLista(query.docs.map( (u) => u.data()) )) },[]);


                        return (
                   
      <div>
          <div className="subtitle-flex">
<img className="img-subtitle" src={LogoWomen} alt="" />
          </div>                  
<ItemList Lista={lista}/>
    </div>
                        )
        };                      
    

export default ItemListContainer;