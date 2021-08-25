import React, {useState} from 'react'


import Minus from '../../assets/img/minus-btn.jpg'
import Plus from '../../assets/img/plus-btn.jpg'

const ItemCount = ({stock, initial, setContador}) => {
    
const [number, setNumber] = useState(parseInt(initial));


const suma = () => {
number <= stock && setNumber(number+1)
};
const resta = () => {
number >= initial && 
setNumber(number-1);

};


setContador(number)
    return(

        <div className ="super-container-counter">
        <div className="container-counter">
<img src={Plus} alt="agregar"  onClick={suma} className="plus-btn"/>
<div className="shown-number">{number}</div>
<img src={Minus} alt="quitar" onClick={resta} className="min-btn"/>

        </div>
        
        </div>


        
        
    )
    };
    
    export default ItemCount;