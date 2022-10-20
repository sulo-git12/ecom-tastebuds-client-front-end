import React, { useContext, useState, useEffect } from "react";
import config from "../config.json";
import axios from "axios";
import ItemCartRow from "../components/ItemCart/ItemCartRow";
import CartContext from "../store/cart-context";

export default function Itemcart() {
  const cartCtx = useContext(CartContext);
  const [orderNo, setorderNo] = useState([]);

  // Insert order data
  const checkOutHandler = (
    userNo,
    outletNo,
    totalAmount,
    payMethod,
    deliveryMethod,
    orderItemsObj
  ) => {
    try {
      // Insert data from order hedader collection
      getLastOrderNo();
      //Create a request body
      const bodyOrderHeder = {
        orderId: orderNo,
        userNo: userNo,
        outletNo: outletNo,
        totalAmount: totalAmount,
        payMethod: payMethod,
        deliveryMethod: deliveryMethod,
        status: "Cooking",
      };

      let OrderURL = config.serverURL + config.ordersEndpointPath;
      let insertOrderHeaer = axios.post(OrderURL, bodyOrderHeder);

      if (!insertOrderHeaer) {
        console.log("Order item can't inserted..");
      } else {
        console.log(insertOrderHeaer);
        let insertOrderItems = null;

        orderItemsObj.map((orderitem) => {
          let bodyOrderItem = {
            orderNo: orderNo,
            itmeId: orderitem.itmeId,
            price: orderitem.price,
            qty: orderitem.qty,
            grossAmount: orderitem.grossAmount,
            discountAmount: orderitem.discountAmount,
            netAmount: orderitem.netAmount,
          };

          let OrderItemURL = config.serverURL + config.ordersItemsEndpointPath;
          insertOrderItems = axios.post(OrderItemURL, bodyOrderItem);
        });

        if (insertOrderItems) {
          console.log(insertOrderItems);
          console.log("Order item successfully inserted..");
          alert("Order item successfully inserted..");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getLastOrderNo = async () => {
    try {
      let URL = config.serverURL + config.ordersEndpointPath;
      const { data } = await axios.get(URL);

      data.map((order) => {
        setorderNo(parseInt(order.orderId) + 1);
      });

      // console.log(orderNo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLastOrderNo();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row m-3">
          <p> {`Home > Cart Items`}</p>
          <h3>My Cart Items</h3>
          <hr />
        </div>

        <table className="table table-header">
          <thead className="table table-dark table-striped">
            <tr>
              <th scope="col">Item Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Item Price</th>
              <th scope="col">Item Total Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table table-striped table-hover">
            {cartCtx.cartItems.map((cartItem) => (
              <ItemCartRow
                itemName={cartItem.name}
                itemQty={cartItem.qty}
                itemPrice={cartItem.price}
                itemSize={cartItem.size}
                itemId={cartItem.id}
              />
            ))}
            <tr className="shadow">
              <th scope="col">TOTAL</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">
                <button
                  type="button"
                  className="btn"
                  style={{
                    backgroundColor: "rgb(255, 92, 0)",
                    color: "#ffffff",
                  }}
                  disabled={cartCtx.cartItems.length === 0 ? true : false}
                  onClick={() => {
                    checkOutHandler(
                      process.env.REACT_APP_LOGGED_USER_ID,
                      cartCtx.outletId,
                      cartCtx.totalOrderPrice,
                      "Cash",
                      "Cash on Delivery",
                      cartCtx.cartItems
                    );
                  }}
                >
                  Checkout Rs {cartCtx.totalOrderPrice} /=
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
