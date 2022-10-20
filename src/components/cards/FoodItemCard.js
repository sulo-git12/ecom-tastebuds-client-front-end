import React, { useState, useContext } from "react";
import CartContext from "../../store/cart-context";

const FoodItemCard = ({ productName, imageSrc, description, size, price, itemObject }) => {

  const cartCtx = useContext(CartContext);
  const [cardItemCount, setCardItemCount] = useState(1);
  
  const addToCart = (newCartItem) => {
    console.log(newCartItem);
    const newCartItemCopy = {...newCartItem};
    newCartItemCopy.qty = cardItemCount;
    cartCtx.addItem(newCartItemCopy);
  };

  const incrementHandler = () => {
    setCardItemCount(currentCount => currentCount + 1)
  }

  const decrementHandler = () => {
    setCardItemCount(currentCount => {
      const updatedCount = currentCount - 1;
      if(updatedCount <= 0)
        return 1;
      else
        return updatedCount;
    });
  }

  return (
      <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title text-center">{productName}</h5>
        <img src={imageSrc}
        className="card-img-top" style={{ maxHeight: "250px" }} ></img>
        <h6 className="card-subtitle text-muted" style={{marginTop: "15px"}}>
            {description}
        </h6><br></br>
        <h6>Size: {size}</h6>
        <h5>LKR {price}</h5>

        <div style={{ 
          border: "1px solid black", 
          height: "50px", 
          width: "100px",
          marginBottom: "20px"
        }}>
          <button 
            type="button" 
            className="btn btn-light"
            style={{ 
              backgroundColor: "#ffffff",
              border: "none" 
            }}
            onClick={incrementHandler}
          >
            +
          </button>
          
          <span
            style={{
              marginLeft: "20px"
            }}
          >
            {cardItemCount}
          </span>

          <button 
            type="button" 
            className="btn btn-light"
            style={{ 
              float: "right",
              backgroundColor: "#ffffff",
              border: "none" 
            }}
            onClick={decrementHandler}
          >
            -
          </button>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => addToCart(itemObject)}
        >
          Add to Cartssss
        </button>
      </div>
    </div>
  )
}

export default FoodItemCard;