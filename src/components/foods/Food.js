import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Rating from "@mui/material/Rating";

const Food = (props) => {

  const cartCtx = useContext(CartContext);
  const addToCart = (newCartItem) => {
    
    const newCartItemCopy = {...newCartItem};
    newCartItemCopy.qty = 1;
    cartCtx.addItem(newCartItemCopy);
  };

  return (
    <React.Fragment>
      <div className="card h-100" style={{ width: "18rem", height: "auto" }}>
        <img
          src={props.food.imgUrl}
          alt="Resturan"
          className="card-img-top"
          style={{ height: "200px" }}
        ></img>s
        <span
          class="badge bg-success"
          style={{ top: "5px", position: "absolute" }}
        >
          Promoted {props.outletId}
        </span>
        <div className="card-body">
          <div className="row">
            <h5 className="card-title">{props.food.name}</h5>
          </div>
          {/* <div className="row">
            <h6 className="card-subtitle mb-2 text-muted"></h6>
          </div> */}
          <div className="row">
            <p className="card-text">
              <Rating
                name="size-medium"
                value={props.food.rating ? props.food.rating : 0}
                readOnly
              />
            </p>
            <p className="card-text">LKR:{props.food.price.price}.00</p>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-primary">
                Buy Now
              </button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-warning"
              onClick={()=>{
                addToCart(props.food);
              }}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </React.Fragment>
  );
};

export default Food;
