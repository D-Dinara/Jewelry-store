import { RiDeleteBin6Line } from "react-icons/ri"
import { calcTotalItemPrice } from "./helpers";
import ChangeQuantity from "./ChangeQuantity";


const CartItem = ({cartItems, setCartItems}) => {

    const deleteCartItem = (item) => {
        const updatedCart = cartItems.filter(element => element.id !== item.id)
        setCartItems(updatedCart)
    }
    

    return (
        <div>
            {cartItems.map(item => {
            return (
                <div className="cart-item" key={item.id}>
                    <img className="cart-item-image" src={item.image} alt="cart item" />
                    <p className="cart-item-name ">{item.name} </p>
                    <ChangeQuantity item={item} cartItems={cartItems} setCartItems={setCartItems} />
                    <p className="price">${calcTotalItemPrice(item.price,item.quantity)}</p> 
                    <div className="delete">
                        <RiDeleteBin6Line className="delete-icon" onClick={() => deleteCartItem(item)}></RiDeleteBin6Line>
                    </div>
                </div> 
            ) 
            })}
        </div>
    )
}

export default CartItem;