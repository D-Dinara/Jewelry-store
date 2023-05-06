const ChangeQuantity = ({item, cartItems, setCartItems}) => {

    const increaseQuantity = (item) => {
        const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 };
            }
            return cartItem;
            });
        setCartItems(updatedCart);
        };
      
    const decreaseQuantity = (item) => {
        const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id && cartItem.quantity > 1) {
                return { ...cartItem, quantity: cartItem.quantity - 1 };
            }
          return cartItem;
        });
        setCartItems(updatedCart);
      };

    return (
        <div className="quantity-container">
            <button className="qty-btn" onClick={() => decreaseQuantity(item)}>
            -
            </button>
            <p className="cart-qty">{item.quantity}</p>
            <button className="qty-btn" onClick={() => increaseQuantity(item)}>
            +
            </button>
        </div>
    )
}

export default ChangeQuantity;