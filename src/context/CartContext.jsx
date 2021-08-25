import React, {createContext,  useState} from 'react'



export const CartContext = createContext() 

export const CartProvider = ({children}) => {

 const [carrito, setCarrito] = useState([])





 
 const addCart = (item) => {
    setCarrito([...carrito.filter( p => p.id !== item.id ), item])
 }

 const removeFromCart = (id) => {
     setCarrito([...carrito.filter(p => p.id !== id )])

 }
 const clearCart = () => {
     setCarrito([])
 }

 const totalPrice = () => {
    return carrito.reduce((acc, p) => acc + (p.amount * p.price), 0 )
 }

    
return(
    <CartContext.Provider value={{carrito, addCart, removeFromCart, clearCart, totalPrice}}>
        {children}
    </CartContext.Provider>
)
}