import { useState } from "react";

function Jewelry({ jewelry, cartItems, setCartItems }) {

    const [descriptionText,setDescriptionText] = useState(false);
    const changeDescriptionText =  (item) => {
        item.fullDescription = !item.fullDescription;
        setDescriptionText(!descriptionText);
    }

    const addCartItem = (item) => {
        const existingCartItem = cartItems.find((cartItem) => cartItem.id === item.id);
      
        if (existingCartItem) {
          const updatedCartItems = cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
          );
          setCartItems(updatedCartItems);
        } else {
          setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
      };

 return(
    <div className="container">
         {jewelry.map(item => {
        const {id,name,price,image,description,fullDescription} = item;
            return(
                <div className='item' key={id}>
                    <img className="item-img" src={image} alt="Product" />
                    <div className='item-heading'>
                        <h2 className="item-name">{name}</h2>
                        <h3 className="item-price">${price}</h3>
                    </div>
                    <p className="description">{fullDescription ? description : description.substring(0,175) + "... "}
                        <button className="show-more-btn" onClick={() => changeDescriptionText(item)}>
                            {fullDescription ? "Show less" : "Show more"}
                        </button>
                    </p>
                    <button className="add-btn" onClick={() => addCartItem(item)}>Add to cart</button>
                </div>
            )
        }
        )}
    </div>
 )   
}

export default Jewelry;