import React from "react";

const MyOrderItem = (props) => {
  return (
    <>
      <tr className="shadow">
        <td scope="col">
          {" "}
          <img
            src={props.orderItem.imageUrl}
            className="image-size"
            alt=""
          ></img>
        </td>
        <td scope="col" className="table-data">
          {props.orderItem.name}
        </td>
        <td scope="col" className="table-data">
          Rs. {props.orderItem.price}
        </td>
        <td scope="col" className="table-data">
          {props.orderItem.quantity}
        </td>
        <td scope="col" className="table-data">
          Rs. {props.orderItem.grossAmount}
        </td>
        <td scope="col" className="table-data">
          Rs. {props.orderItem.discountAmount}
        </td>
        <td scope="col" className="table-data">
          Rs. {props.orderItem.netAmount}
        </td>
      </tr>
    </>
  );
};

export default MyOrderItem;
