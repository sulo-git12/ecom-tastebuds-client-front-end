import React from "react";

const MyOrderItem = () => {
  return (
    <>
      <tr className="shadow">
        <td scope="col">
          {" "}
          <img
            src="https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg"
            className="image-size"
          ></img>
        </td>
        <td scope="col" className="table-data">
          Pot Biriyani
        </td>
        <td scope="col" className="table-data">
          250
        </td>
        <td scope="col" className="table-data">
          1
        </td>
        <td scope="col" className="table-data">
          250.00
        </td>
        <td scope="col" className="table-data">
          500
        </td>
        <td scope="col" className="table-data">
          75
        </td>
      </tr>
    </>
  );
};

export default MyOrderItem;
