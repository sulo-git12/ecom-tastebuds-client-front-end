import React, { useState, useEffect } from "react";
import axios from "axios";
import MyOrder from "../components/MyOrder";
import "../styles/myorder.css";

const MyOrderList = () => {
  const [myOrders, setmyOrders] = useState([]);

  const getMyOrders = async () => {
    let URL = "http://localhost:8088/api/my_orders/10";

    const { data } = await axios.get(URL);
    let newMyOrder = data.map((order) => {
      return {
        orderId: order.orderId,
        userNo: order.userNo,
        outletName: order.OutletData.name,
        totalAmount: order.totalAmount,
        payMethod: order.payMethod,
        deliveryMethod: order.deliveryMethod,
        status: order.status,
        createdDateTime: order.createdDateTime,
      };
    });

    setmyOrders(newMyOrder);
  };

  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row m-3">
          <p> {`Home > Faviourte Food Outlet`}</p>
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
                  <MyOrder
                    key={order.orderId}
                    orderNo={order.orderId}
                    outletName={order.outletName}
                    totalAmount={order.totalAmount}
                    payMethod={order.payMethod}
                    deliveryMethod={order.deliveryMethod}
                    status={order.status}
                    createdDateTime={order.createdDateTime}
                  />
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
