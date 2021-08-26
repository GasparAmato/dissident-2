import React, { useContext,  useEffect,  useState} from 'react'
import {database} from "../../firebase/fireBase"
import { Link } from 'react-router-dom'

import { CartContext } from "../../context/CartContext"


const InfoAndPurchase = () => {

const { carrito, totalPrice, clearCart} = useContext(CartContext)
console.log(carrito)

// validation states
const [name, setName] = useState("")
const [name2, setName2] = useState("")
const [phone, setPhone] = useState(0)
const [phone2, setPhone2] = useState(0)
const [mail, setMail] = useState("")
const [mail2, setMail2] = useState("")

const [buttonAvailability, setButtonAvailability] = useState(false)

useEffect(() => {
    if(name === name2 & phone === phone2 & mail === mail2 ){
        if(name === "" || phone === 0 || mail === ""){
            setButtonAvailability(false)
        }else{
        setButtonAvailability(true)
        console.log("funciono")}
    } else{
        setButtonAvailability(false)
        console.log("no funciono")     
    }
}, [name, name2, phone, phone2, mail, mail2])


const [buyer, setBuyer] = useState({
    name:"", 
    phone:"", 
    email:""
})

const [activado, setActivado] = useState(true)



      
    const hanldleInput = (event) => {
        console.log(event.target.value)
        setBuyer({
            ...buyer, [event.target.name] : event.target.value
        })
        console.log("buyer 1")
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
  <div className="row">         
<div className="col-md-3">                
  <input 
    type="text" 
    className="form-control" 
    placeholder="enter name" 
    name="name"
    onChange={hanldleInput}
    // eslint-disable-next-line
    onChange={(event)=> setName(event.target.value)}>


  </input>
</div>

<div className="col-md-3"> 
<input 
type="number" 
className="form-control"
placeholder="Phone Number"
 name="phone"
 onChange={hanldleInput}
 // eslint-disable-next-line
 onChange={(e)=>setPhone(e.target.value)}>      
  </input>
</div>

<div className="col-md-3"> 
<input 
type="email" 
className="form-control" 
placeholder="e-mail" 
name="email" 
onChange={hanldleInput}
// eslint-disable-next-line
onChange={(e)=> setMail(e.target.value)}
>
</input>
</div>



</div>
        

{/*-------- VALIDACION -------*/}

        
            
  <div className="row">         
<div className="col-md-3">                
  <input 
    type="text" 
    className="form-control" 
    placeholder="enter name" 
    name="name"
    onChange={(e) => setName2(e.target.value)}>
  </input>
</div>

<div className="col-md-3"> 
<input 
type="number" 
className="form-control"
placeholder="Phone Number"
 name="phone"
 onChange={(e) => setPhone2(e.target.value)}>      
  </input>
</div>

<div className="col-md-3"> 
<input 
type="email" 
className="form-control" 
placeholder="e-mail" 
name="email" 
onChange={(e) => setMail2(e.target.value)}>
</input>
</div>
</div>

{ buttonAvailability &&
            <div className="col-md-3">
   
<button  className="btn btn-primary" type="submit" >make order</button>
              
            </div>
             } 
{ !buttonAvailability &&
        <div>las casillas de validacion no coinciden o estan vacias </div>

             }
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