import { useState } from "react";
import { data } from "./data";

function Slider() {
    const imagesArray = [];
    data.forEach(item => {
        imagesArray.push(item.image)
    })

    const [image,setImage] = useState(0);
    const showNextImage = () => {
        setImage(
            image => {
                if (image < imagesArray.length - 1) image++;
                else image = 0;
                return image;
            }
        )
    }
    const showPrevImage = () => {
        setImage(
            image => {
                if (image > 0) image--;
                else image = imagesArray.length - 1;
                return image;
            }
        )
    }
    return(
        <div className="slider-container">
            <button className="slider-btn-prev" onClick={showPrevImage}><div className="arrows prev"></div></button>
            <img className="slider" src={imagesArray[image]} alt="gift"/>
            <button className="slider-btn-next" onClick={showNextImage}><div className="arrows next"></div></button>
            
        </div>
    )
}

export default Slider;
