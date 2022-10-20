import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import base64 from "base-64";

const Outlet = (props) => {
  return (
    <React.Fragment>
      <div className="card h-100" style={{ width: "18rem", height: "auto" }}>
        <img
          src={props.outlet.imgUrl}
          alt="Resturant"
          className="card-img-top"
          style={{ height: "200px" }}
        ></img>
        <div className="card-body">
          <div className="row">
            <h5 className="card-title">
              <Link
                to={`/Outlet/${base64.encode(props.outlet.outletId)}/Foods`}
                style={{ textDecoration: "none" }}
              >
                {props.outlet.name}
              </Link>
            </h5>
          </div>
          <div className="row">
            <h6 className="card-subtitle mb-2 text-muted">
              Address: {props.outlet.address.no}, {props.outlet.address.street},{" "}
              {props.outlet.address.city}
            </h6>
          </div>
          <div className="row">
            <p className="card-text">
              <Rating
                name="size-medium"
                value={props.outlet.rating ? props.outlet.rating : 0}
                readOnly
              />
            </p>
          </div>
          <div>
            <p style={{ color: "red", fontSize: "auto" }}>
              Opening <br />
              Days: {props.outlet.opening.days}
              <br />
              Hours : {props.outlet.opening.hours}
              <br />
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </React.Fragment>
  );
};

export default Outlet;
