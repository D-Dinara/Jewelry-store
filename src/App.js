import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import About from './About';
import logo from "./images/logo.png";

function App() {

  return (
    <div className='wrapper'>
      <Router forceRefresh={true}>
        <div className='content'>
          <header className='header'>
            <img className='header-logo' src={logo} alt="Logo" />
            <div className='heading'>
              <h1 className='store-name'>EXCLUSIVE JEWELRY</h1>
              <h3 className='slogan'>best quality since 1985</h3>
            </div>
            <div className='void'>           
            </div>
          </header>
          <hr/>
          <nav>
            <Link to="/" className='link'>HOME</Link>
            <Link to="/shop" className='link'>OUR JEWELRY</Link>
            <Link to="/about" className='link'>ABOUT US</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </div>
        <footer>
          <hr/>
          <div className='footer-content'>
            <img className='footer-logo' src={logo} alt="Logo" width="45px" height="35px"/>
            <h3 className='footer-store-name'>Exclusive jewelry</h3>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
