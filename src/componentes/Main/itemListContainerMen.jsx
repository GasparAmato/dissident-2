import  {useState, useEffect} from 'react'
import ItemList from './itemList'

import LogoMen from '../../assets/img/logo-men.jpg'

import { database } from '../../firebase/fireBase'




const ItemListContainerMen = () => {

const [lista, setLista] = useState([])

    const ropa = database.collection("Men")


                        
                        
    useEffect(()=> {
        
        
        ropa.get().then((query) => setLista(query.docs.map( (u) => u.data()) )) 
        // eslint-disable-next-line 
    },[]);

                       
         
   
          

           
                      

  return (
                   
      <div>
          <div className="subtitle-flex">
          <img className="img-subtitle" src={LogoMen} alt="" />
          </div>
 <ItemList Lista={lista}/>  

    </div>

                        )
        };                  
        
        
    

export default ItemListContainerMen;