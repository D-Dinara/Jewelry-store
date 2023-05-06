import { data } from './data';
import { useState } from 'react';
import Jewelry from './Jewelry';
import Filters from './Filters';

function Shop({cartItems, setCartItems}) {

    const [jewelry,setJewelry] = useState(data);

    return(
        <div className='shop-container'>  
            <Filters 
                data ={data}
                setJewelry ={setJewelry}
            />
            <Jewelry 
                jewelry = {jewelry} 
                cartItems = {cartItems}
                setCartItems = {setCartItems}
            />
        </div>
    )
}

export default Shop;