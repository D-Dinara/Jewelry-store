import Slider from "./Slider";
import {
    Link
  } from "react-router-dom";

function Home() {
    return(
        <div className="homePage-container">
            {<Slider />}
            <div className="homePage-content">
                <p className="homePage-text">Express yourself with our exquisite jewelry...</p>
                <Link to="/shop" className="shop-now-link"><button className="shop-now-btn">SHOP NOW</button></Link>
            </div>
        </div>
    )
}

export default Home;