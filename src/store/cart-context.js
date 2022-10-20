import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
    cartItems: [],
    totalOrderPrice: 0,
    addItem: (newCartItem) => {},
    editItem: (cartItem) => {},
    removeItem: (removeItemId) => {}
});


export const CartContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalOrderPrice, setTotalOrderPrice] = useState(0);

    useEffect(() => {
        if(localStorage.getItem("cartItems")) {
            const currentCartItems = JSON.parse(localStorage.getItem("cartItems"));
            setCartItems(currentCartItems);
        }
    }, []);

    useEffect(() => {
        let totalOrderPrice = 0;
        if(cartItems.length > 0) {
            cartItems.forEach(singleItem => {
                totalOrderPrice = totalOrderPrice + (singleItem.qty*singleItem.price);
            });
        }
        
        setTotalOrderPrice(totalOrderPrice);
    }, [cartItems]);

    const addItem = (newCartItem) => {
        console.log("******")
        const cartItemsCopy = [...cartItems];
        //Checks whether item already exist in the cart
        const currentCartItem = cartItemsCopy.find(singleItem => singleItem.id === newCartItem.id);
        if(currentCartItem) {
            currentCartItem.qty = currentCartItem.qty + newCartItem.qty;
        } else {
            const newCartItemToAdd = { 
                id: newCartItem.id, 
                itmeId: newCartItem.itmeId, 
                name: newCartItem.name, 
                qty: newCartItem.qty,
                price: newCartItem.price.price,
                grossAmount: (newCartItem.qty) * (newCartItem.price.price),
                discountAmount: newCartItem.price.discount,
                netAmount : ((newCartItem.qty) * (newCartItem.price.price)) - (newCartItem.price.discount),
                size: newCartItem.size
            };
            cartItemsCopy.push(newCartItemToAdd);
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItemsCopy));
        setCartItems(cartItemsCopy);
    }

    const editItem = (editCartItem) => {
        const cartItemsCopy = [...cartItems];
        //Checks whether item already exist in the cart
        const currentCartItem = cartItemsCopy.find(singleItem => singleItem.id === editCartItem.id);
        currentCartItem.qty = editCartItem.qty;
        localStorage.setItem("cartItems", JSON.stringify(cartItemsCopy));
        setCartItems(cartItemsCopy);
    }

    const removeItem = (removeItemId) => {
        const cartItemsCopy = [...cartItems];
        //Checks whether item already exist in the cart
        const removeCartItemIndex = cartItemsCopy.findIndex(singleItem => singleItem.id === removeItemId);
        cartItemsCopy.splice(removeCartItemIndex, 1);
        setCartItems(cartItemsCopy);
    }

    return (
        <CartContext.Provider
            value={{
                cartItems: cartItems,
                addItem: addItem,
                editItem: editItem,
                removeItem: removeItem,
                outletId: 1,
                totalOrderPrice: totalOrderPrice
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}
 
export default CartContext;