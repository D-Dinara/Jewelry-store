import logo from "./images/logo.png";
import CartIcon from "./CartIcon";

const Header = ({ cartItems}) => {
    
    return (
        <header className='header'>
            <img className='header-logo' src={logo} alt="Logo" />
            <div className='heading'>
                <h1 className='store-name'>EXCLUSIVE JEWELRY</h1>
                <h3 className='slogan'>best quality since 1985</h3>
            </div>
                {cartItems.length > 0 ? 
                    <CartIcon 
                    cartItems = {cartItems} 
                    /> : 
                null}
         </header>
    )
}

export default Header;