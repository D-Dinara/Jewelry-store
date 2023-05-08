import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import About from './About';
import Cart from './Cart';
import { Layout } from './Layout';
import { useState } from 'react';

function App() {

  const [cartItems,setCartItems] = useState([]);

  return (
      <Routes>
        <Route path='/' element={<Layout cartItems={cartItems} />}>
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop cartItems={cartItems} setCartItems={setCartItems} />}/>
          <Route path='about' element={<About />}/>
          <Route path='cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}/>
        </Route>
      </Routes>
  );
}

export default App;  
