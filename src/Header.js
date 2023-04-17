import logo from "./images/logo.png";

const Header = () => {
    return (
        <header className='header'>
            <img className='header-logo' src={logo} alt="Logo" />
            <div className='heading'>
                <h1 className='store-name'>EXCLUSIVE JEWELRY</h1>
                <h3 className='slogan'>best quality since 1985</h3>
            </div>
                <div className='void'>           
            </div>
         </header>
    )
}

export default Header;