import React from 'react';
import FoodItemCard from './cards/FoodItemCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FoodInShop() {
  return (
    <div>
      <h1>Health House by Fit Meals Food outlet</h1>
      <React.Fragment>
      <FoodItemCard
        productName="Burger with Chicken"
        imageSrc="https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-burger-recipe-500x500.jpg"
        description="Healthy tasty food with Health House by Fit Meals."
        size="Medium"
        price="699.99"
       />

      <FoodItemCard
        productName="Burger with Chicken"
        imageSrc="https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/chicken-burger-recipe-500x500.jpg"
        description="Healthy tasty food with Health House by Fit Meals."
        size="Medium"
        price="699.99"
      />
    </React.Fragment>
    </div>
  )
}


