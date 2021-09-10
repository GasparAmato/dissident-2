import  {useState, useEffect} from 'react'
import ItemList from './itemList'

import { database } from '../../firebase/fireBase'
import { useParams } from  "react-router-dom"

import LogoWomen from '../../assets/img/logo-women.jpg'
import LogoMen from '../../assets/img/logo-men.jpg'





const ItemListContainer = () => {


    const [lista, setLista] = useState([])
   

    
const { category } = useParams()

    

    const itemCollection = database.collection("ropa")

    const categorias = itemCollection.where("link", "==", category)

    useEffect(()=> {
         // eslint-disable-next-line
   categorias.get().then((query) => setLista(query.docs.map( (u) => u.data()) )) },[category]);

                        


                        return (
                   
      <div>
          <div className="subtitle-flex">
{category === "women" && 
<img className="img-subtitle" src={LogoWomen} alt="" />}

{category === "men" && 
<img className="img-subtitle" src={LogoMen} alt="" />}
          </div>                  
<ItemList Lista={lista}/>
    </div>
                        )
        };                      
    

export default ItemListContainer;