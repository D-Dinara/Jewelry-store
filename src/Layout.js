import { NavLink, Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export const Layout = () => {
    return (
      <div className='wrapper'>
        <div className='content'>
          <Header />
          <hr/>
          <nav>
            <NavLink to="/" className='link'>HOME</NavLink>
            <NavLink to="/shop" className='link'>OUR JEWELRY</NavLink>
            <NavLink to="/about" className='link'>ABOUT US</NavLink>
          </nav>
          <Outlet />
        </div>
        <Footer />
      </div>
    )
}