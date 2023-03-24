import { useState } from "react";

function Jewelry({jewelry}) {
    const [descriptionText,setDescriptionText] = useState(false);
    const changeDescriptionText = (item) => {
        item.fullDescription = !item.fullDescription;
        setDescriptionText(!descriptionText);
    }
 return(
    <div className="container">
         {jewelry.map(item => {
        const {id,name,price,image,description,fullDescription} = item;
            return(
                <div className='item' key={id}>
                    <img className="item-img" src={image} alt="Product" />
                    <div className='item-heading'>
                        <h2 className="item-name">{name}</h2>
                        <h3 className="item-price">${price}</h3>
                    </div>
                    <p className="description">{fullDescription ? description : description.substring(0,175) + "... "}
                        <button className="show-more-btn" onClick={() => changeDescriptionText(item)}>{fullDescription ? "Show less" : "Show more"}</button>
                    </p>
                </div>
            )
        }
        )}
    </div>
 )   
}

export default Jewelry;