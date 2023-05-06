export const calcTotalItemPrice = (price,quantity) => {
    return(price*quantity)
  }
  
  export const calcTotalAmount = (cartItems) => {
    return cartItems.reduce(
      (acc, currentItem) =>
        acc + calcTotalItemPrice(currentItem.price, currentItem.quantity),
      0
    );
  }
  
  export const calcTotalQuantity = (cartItems) => {
    return cartItems.reduce(
      (acc, currentItem) => acc + currentItem.quantity,
      0
    );
  }