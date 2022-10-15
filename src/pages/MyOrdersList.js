import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config.json";
import capitalizeString from "capitalize-string";
import moment from "moment";
import MyOrder from "../components/MyOrder/MyOrder";
import "../styles/myorder.css";

const MyOrderList = () => {
  const [myOrders, setmyOrders] = useState([]);

  const getMyOrders = async (userId) => {
    try {
      let URL = config.serverURL + config.ordersEndpointPath + `${userId}`;

      const { data } = await axios.get(URL);
      let newMyOrder = data.map((order) => {
        return {
          orderId: order.orderId,
          userNo: order.userNo,
          outletName: capitalizeString(order.OutletData.name),
          totalAmount: order.totalAmount.toFixed(2),
          payMethod: order.payMethod,
          deliveryMethod: order.deliveryMethod,
          status: order.status,
          createdDateTime: moment(order.createdDateTime).format(
            "MMMM Do YYYY, h:mm: a"
          ),
        };
      });
      setmyOrders(newMyOrder);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyOrders(process.env.REACT_APP_LOGGED_USER_ID);
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row m-3">
          <p> {`Home > My orders`}</p>
          <h3>My orders on Tastebuds</h3>
          <hr />
        </div>

        <table className="table table-header">
          <thead className="table table-dark table-striped">
            <tr>
              <th scope="col" style={{ width: "150px" }}>
                Order No
              </th>
              <th scope="col">Resturent</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Delivery Method</th>
              <th scope="col">payment Method</th>
              <th scope="col">Pay Amount (Rs.)</th>
            </tr>
          </thead>
          <tbody className="table table-striped table-hover">
            {myOrders.map((order) => {
              return (
                <>
                  <MyOrder key={order.orderId} order={order} />
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderList;
