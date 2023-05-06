import { BsCart4 } from "react-icons/bs"
import { calcTotalAmount, calcTotalQuantity } from "./helpers";
import "./Cart.css"
import CartItem from "./CartItem";


const Cart = ({ cartItems, setCartItems }) => {
    
    const totalAmount = calcTotalAmount(cartItems);
    const totalQuantity = calcTotalQuantity(cartItems);

    return (
        <div className="cart">
            <div className="cart-header">
                <BsCart4 className="cart-icon"></BsCart4> 
                <h2 className="my-cart">My cart</h2>
            </div>

            <CartItem cartItems={cartItems} setCartItems={setCartItems}/>
            
            <div className="cart-summary">
                <h3 className="total"><span className="total">Quantity of items:</span>{totalQuantity}</h3>
                <h3 className="total"><span className="total">Total price:</span>${totalAmount}</h3>
                <button className="order">Order now</button>
            </div>
        </div>
    )
}  

export default Cart;