import { BsCart4 } from "react-icons/bs"
import { Link } from "react-router-dom";
import { calcTotalAmount, calcTotalQuantity } from "./helpers";
import "./CartIcon.css";

const CartIcon = ({ cartItems }) => {

    const totalAmount = calcTotalAmount(cartItems);

    const totalQuantity = calcTotalQuantity(cartItems);
    
    return (
        <Link to="/cart" className="cart-link">
            <BsCart4 className="cart-icon"></BsCart4> 
            <div className="cart-info">
                <span><span className="cart-quantity">{totalQuantity}</span></span>
                <span><span className="cart-price">${totalAmount}</span></span>
            </div>
        </Link>
    )
}  

export default CartIcon;