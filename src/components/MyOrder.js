import React, { useState } from "react";
import capitalizeString from "capitalize-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import timeZoneConverter from "time-zone-converter";
import MyOrderItem from "../components/MyOrderItem";
import "../styles/myorder.css";

const MyOrder = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <tr className="shadow">
        <th scope="col">{props.orderNo}</th>
        <th scope="col">{capitalizeString(props.outletName)}</th>
        <th scope="col">
          {timeZoneConverter(
            `${props.createdDateTime}`,
            0,
            0,
            "YYYY/MM/DD HH:mm:ss"
          )}
        </th>
        <th scope="col">{props.status}</th>
        <th scope="col">{props.deliveryMethod}</th>
        <th scope="col">{props.payMethod}</th>
        <th scope="col">Rs. {props.totalAmount}</th>
      </tr>

      {/* Order item section */}
      <tr className="mr-2">
        <th colSpan={7}  style={{ paddingLeft: "45px", paddingRight: "30px" }}>
          <button
            type="button"
            onClick={() => setShow((prev) => !prev)}
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
                  <th scope="col">Price(LKR)</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Gross amount(LKR)</th>
                  <th scope="col">Discount amount(LKR)</th>
                  <th scope="col">Net amount(LKR)</th>
                </tr>
              </thead>
              <tbody className="table table-striped table-hover">
                <MyOrderItem></MyOrderItem>
                <MyOrderItem></MyOrderItem>
              </tbody>
            </table>
          )}
        </th>
      </tr>
    </>
  );
};

export default MyOrder;
