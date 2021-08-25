import React, { useContext,  useEffect,  useState} from 'react'
import {database} from "../../firebase/fireBase"
import { Link } from 'react-router-dom'

import { CartContext } from "../../context/CartContext"


const InfoAndPurchase = () => {

const { carrito, totalPrice, clearCart} = useContext(CartContext)
console.log(carrito)

const [buyer, setBuyer] = useState({
    name:"", 
    phone:"", 
    email:""
})
const [activado, setActivado] = useState(true)



      
    const hanldleInput = (event) => {
        console.log(event.target.value)
        setBuyer({
            ...buyer,
            [event.target.name] : event.target.value
        })
        console.log("holad")
        console.log(buyer)
        


    }
    



    // firebase
    let cartCollection = database.collection("buyer")

    console.log( totalPrice())
    console.log(carrito)
    const total = totalPrice();
    const items = carrito;

    const sendBuyer = ( buyer, items, total) => {
      
        console.log("aqui se proceso de verdad  " )
        let pedido = {
            buyer : buyer,
            items : items,
            total : total,
            date : new Date().toString(),

        }
      
        
    

        cartCollection.add(pedido)
        .then((res) => alert("su pedido ha sido realizado con exito"))
        .catch(err  => alert("ha habido un error, intente denuevo" + err))
        .then(clearCart())
        .then(setActivado(false))
        
    }

    const handleOnClick = (event) => {
        event.preventDefault()
        sendBuyer(buyer, items, total)
    }

    const [id, setId] = useState([])
    useEffect(() => {
    cartCollection.get().then(query => setId(query.docs.map( (u) => u.id)) )
    
    // eslint-disable-next-line 
    }, [activado])
    return(


        <div>

{!activado &&
<div className="">
<div className="d-flex justify-content-center">el id de su compra es: <h6>{id[(id.length - 1)]}</h6></div>

<Link to="/" className="d-flex justify-content-center">
<button className=" btn btn-primary" >ir a menu principal</button>
</Link>
</div>
}

  {activado &&
 
<div>

        <form className="row" onSubmit={handleOnClick}>
            <h2>Formulario</h2>
           
<div className="col-md-3">                
  <input 
    type="text" 
    className="form-control" 
    placeholder="enter name" 
    name="name"
    onChange={hanldleInput}>
  </input>
</div>

<div className="col-md-3"> 
<input 
type="number" 
className="form-control"
placeholder="Phone Number"
 name="phone"
 onChange={hanldleInput}>      
  </input>
</div>

<div className="col-md-3"> 
<input 
type="email" 
className="form-control" 
placeholder="e-mail" 
name="email" 
onChange={hanldleInput}>
</input>
</div>



            <div className="col-md-3">
                
<button className="btn btn-primary" type="submit" >make order</button>
                
            </div>
        </form>

<h3>purchase info:</h3>
{carrito.map((e) => {
   
   return(
       <div>
   <div>{e.name}</div>
   <div>each one {e.price}</div>
        </div>
   
   )

})}


        </div>  
        
}
</div>
    
    )
}
export default InfoAndPurchase;