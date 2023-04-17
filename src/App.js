import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import About from './About';
import { Layout } from './Layout';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop />}/>
          <Route path='about' element={<About />}/>
        </Route>
      </Routes>
  );
}

export default App;
