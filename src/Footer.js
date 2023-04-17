import logo from "./images/logo.png";

const Footer = () => {
    return (
        <footer>
            <hr/>
            <div className='footer-content'>
                <img className='footer-logo' src={logo} alt="Logo" width="45px" height="35px"/>
                <h3 className='footer-store-name'>Exclusive jewelry</h3>
            </div>
        </footer>
    )
}

export default Footer;