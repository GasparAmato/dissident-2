import React from 'react'
import { Link } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel'

import Women from "../../../assets/img/carousel-women.jpg"
import Men from "../../../assets/img/carousel-men.jpg"

       
      
const Cart = () => {
    return(
        
        <Carousel>
        <Carousel.Item>
           <Link to="/women">
               <img
                 className=" img-carousel"
                src={Women}
                alt="First slide"
               />
            <Carousel.Caption>
                <h3>WOMEN</h3>    
            </Carousel.Caption>
           </Link>
         </Carousel.Item>
         <Carousel.Item>
        <Link to="/men">
          <img
            className="img-carousel"
            src={Men}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>MEN</h3>
          </Carousel.Caption>
        </Link>
        </Carousel.Item>
      </Carousel>
        
        
    )
}
export default Cart;