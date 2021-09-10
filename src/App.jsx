import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from  "react-router-dom"
import { CartProvider } from './context/CartContext'
 

import Navbar from "./componentes/NavBar/NavBar";



import Logo from "./assets/img/logo-dissident.jpg";
import imgcarrito from "./assets/img/icono_cart.jpg"

import ItemListContainer from './componentes/Main/itemListContainer'
import ItemDetailContainer from './componentes/Main/expandedItems/ItemDetailContainer';
import AboutUs from './componentes/AboutUs/AboutUs';
import Carrousel from './componentes/Main/carrusel/carrousel'
import Cart from './componentes/Cart/Cart';
import InfoAndPurchase from './componentes/Cart/InfoAndPurchase';





/* <ItemCount initial="1" stock="9" /> */  
function App() {
 

  return (


<CartProvider> 

    <BrowserRouter>
    <Navbar logo={Logo} imgCarrito={imgcarrito}  />
    <Switch>
      
      <Route exact path="/">
       <Carrousel/>
      </Route>

      <Route exact path="/categoria/:category">
        <ItemListContainer/>
      </Route>

      <Route exact path="/AboutUs">
        <AboutUs/>
      </Route>
      
      <Route exact path="/categoria/:category/:id" >
    <ItemDetailContainer/>
     </Route>
     
     
     <Route exact path="/cart">
        <Cart/>
      </Route>
      
      <Route exact path="/info">
          <InfoAndPurchase/>
      </Route>
      
      
      

    </Switch>
    </BrowserRouter>


</CartProvider>
  );
}

export default App;
