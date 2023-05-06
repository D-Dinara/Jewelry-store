import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export const Layout = ({cartItems, setCartItems}) => {

    return (
      <div className='wrapper'>
        <div className='content'>
          <div className="fixed-header">
            <Header cartItems={cartItems} setCartItems={setCartItems}/>
            <hr/>
            <nav>
              <NavLink to="/" className='link'>HOME</NavLink>
              <NavLink to="/shop" className='link'>OUR JEWELRY</NavLink>
              <NavLink to="/about" className='link'>ABOUT US</NavLink>
            </nav>
          </div>
          <Outlet className="outlet" />
        </div>
        <Footer />
      </div>
    )
}