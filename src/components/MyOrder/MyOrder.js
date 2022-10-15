import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config.json";
import capitalizeString from "capitalize-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong
} from "@fortawesome/free-solid-svg-icons";
import MyOrderItem from "./MyOrderItem";
import "../../styles/myorder.css";

const MyOrder = (props) => {
  const [show, setShow] = useState(false);
  const [orderItem, setorderItem] = useState([]);

  const getOrderItems = async (orderId) => {
    try {
      let URL =
        config.serverURL + config.ordersItemsEndpointPath + `${orderId}`;

      const { data } = await axios.get(URL);

      let newFormatedOrderItem = data.map((item) => {
        return {
          id: item._id,
          orderNo: item.orderNo,
          price: item.price.toFixed(2),
          quantity: item.qty.toFixed(0),
          grossAmount: item.grossAmount.toFixed(2),
          discountAmount: item.discountAmount.toFixed(2),
          netAmount: item.netAmount.toFixed(2),
          name: capitalizeString(item.ItemData.name),
          imageUrl: item.ItemData.imageUrl,
        };
      });
      setorderItem(newFormatedOrderItem);

      // console.log(orderItem);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getOrderItems("2");
  // }, []);

  return (
    <>
      <tr className="shadow">
        <th scope="col">{props.order.orderId}</th>
        <th scope="col">{props.order.outletName}</th>
        <th scope="col">{props.order.createdDateTime}</th>
        <th scope="col">{props.order.status}</th>
        <th scope="col">{props.order.deliveryMethod}</th>
        <th scope="col">{props.order.payMethod}</th>
        <th scope="col">Rs. {props.order.totalAmount}</th>
      </tr>

      {/* Order item section */}
      <tr className="mr-2">
        <th colSpan={7} style={{ paddingLeft: "45px", paddingRight: "30px" }}>
          <button
            type="button"
            onClick={() => {
              setShow((prev) => !prev);
              getOrderItems(props.order.orderId);
            }}
            style={{ backgroundColor: "brown" }}
            className="btn btn-primary mb-2"
          >
            View order details{" "}
            <FontAwesomeIcon icon={faArrowDownLong} color="white" />
          </button>

          {show && (
            <table className="table">
              <thead className="table table-light table-striped">
                <tr className="table-active">
                  <th scope="col">Food image</th>
                  <th scope="col">Food items</th>
                  <th scope="col">Price(Rs.)</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Gross amount(Rs.)</th>
                  <th scope="col">Discount amount(Rs.)</th>
                  <th scope="col">Net amount(Rs.)</th>
                </tr>
              </thead>
              <tbody className="table table-striped table-hover">
                {orderItem.map((item) => {
                  return (
                    <>
                      <MyOrderItem
                        key={item.id}
                        orderItem={item}
                      />
                    </>
                  );
                })}
              </tbody>
            </table>
          )}
        </th>
      </tr>
    </>
  );
};

export default MyOrder;
