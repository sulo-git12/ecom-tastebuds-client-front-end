import React, { useState } from "react";
import FoodItemCard from '../cards/FoodItemCard';

export default function FoodInShop() {

  // Food items array from API
  const [items, setItems] = useState([
    {id: "1", name: "Burger", imageSrc: "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-burger-recipe-500x500.jpg", price: 850, size: "medium" },
    {id: "2", name: "Pizza",  imageSrc: "https://www.simplyrecipes.com/thmb/Pb4_cwer3Dv-cAb297od2Qr_GCU=/1777x1333/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg", price: 1500, size: "Large" },
    {id: "3", name: "Sandwictch",  imageSrc: "https://www.simplyrecipes.com/thmb/Pb4_cwer3Dv-cAb297od2Qr_GCU=/1777x1333/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg", price: 475, size: "medium" },
    {id: "4", name: "Fried Rice",  imageSrc: "https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2020/02/Egg-Fried-Rice-2.jpg?fit=1300%2C867&ssl=1", price: 650, size: "medium" }
  ]);
  
  return (
    <div>
      <h1>BURGER KING</h1>
      <div className="row">
        {items.map((item) => {
          return (
            <div className="col-md-3">
              <FoodItemCard
                  productName={items.name}
                  imageSrc="https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-burger-recipe-500x500.jpg"
                  description="Healthy tasty food."
                  size={item.size}
                  price={item.price}
                  itemObject={item}
                />
            </div>
          )
        })}
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


