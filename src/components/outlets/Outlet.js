import React from "react";
import Rating from "@mui/material/Rating";

const Outlet = (props) => {
  return (
    <React.Fragment>
      <div className="card" style={{ width: "18rem", height: "auto" }}>
        <img
          src={props.outlet.imgUrl}
          className="card-img-top"
          style={{ height: "200px" }}
        ></img>
        <div className="card-body">
          <div className="row">
            <h5 className="card-title">{props.outlet.name}</h5>
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
                defaultValue={props.outlet.rating}
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
