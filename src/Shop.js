import { data } from './data';
import { useState } from 'react';
import Jewelry from './Jewelry';
import Filters from './Filters';

function Shop(){
    const [jewelry,setJewelry] = useState(data);
    
    return(
        <div className='shop-container'>  
            <Filters 
                data ={data}
                setJewelry ={setJewelry}
            />
            <Jewelry jewelry = {jewelry}/>
        </div>
    )
}

export default Shop;