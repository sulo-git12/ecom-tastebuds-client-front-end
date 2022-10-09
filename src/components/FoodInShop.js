import React, { useState, useContext } from "react";
import FoodItemCard from './cards/FoodItemCard';
import CartContext from "../store/cart-context";

export default function FoodInShop() {

  // Food items array from API
  const [items, setItems] = useState([
    {id: "1", name: "Burger with Chicken"},
    {id: "2", name: "food 2"},
    {id: "3", name: "food 3"}
  ]);

  const cartCtx = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);

  /* CartItem sample array object
    [
      {id: 1, name: Burger, qty: 1},
      {id: 2, name: Sandwich, qty: 2},
    ]
   */

  const addToCart = (newCartItem) => {
    cartCtx.addItem(newCartItem);
    // const cartItemsCopy = [...cartItems];
    // //Checks whether item already exist in the cart
    // const currentCartItem = cartItemsCopy.find(singleItem => singleItem.id === newCartItem.id);
    // if(currentCartItem) {
    //   currentCartItem.qty = currentCartItem.qty + 1;
    // } else {
    //   const newCartItemToAdd = { id: newCartItem.id, name: newCartItem.name, qty: 1};
    //   cartItemsCopy.push(newCartItemToAdd);
    // }
    // setCartItems(cartItemsCopy);
  };


  return (
    <div>
      <h1>Health House by Fit Meals Food outlet</h1>
      <div className="row">
        <div className="col-md-12">
        {
        items.map((item) => {
          return (
            <React.Fragment>
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title text-center">{item.name}</h5>
                  <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-burger-recipe-500x500.jpg" className="card-img-top" style={{ maxHeight: "250px" }} ></img>
                  <h6 className="card-subtitle text-muted" style={{marginTop: "15px"}}>{item.name}</h6><br></br>
                  <h6>Size: {item.name}</h6>
                  <h5>LKR {item.name}</h5>
                  <button className="btn btn-primary" onClick={()=> addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            </React.Fragment>
          )
        })
        }
        </div>
        </div>
      
      
    </div>
  )
}

// {/* <FoodItemCard
//                 productName="Burger with Chicken"
//                 imageSrc="https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-burger-recipe-500x500.jpg"
//                 description="Healthy tasty food with Health House by Fit Meals."
//                 size="Medium"
//                 price="699.99"           
//               /> */}


// const index = cartItems.findIndex((ct) => ct.id === newCartItem.id);
//     if (index > -1) {
//       alert('if.......');
//       // let _cartItems = cartItems;
//       // _cartItems[index].quantity += 1;
//       // setCartItems(_cartItems);
//     } else {
//       alert('else.......');
//       setCartItems(newCartItem)
//       // setCartItems([
//       //   ...cartItems,
//       //   { ...product, quantity: 1, formatPrice: formatPrice },
//       // ]);
//     }


