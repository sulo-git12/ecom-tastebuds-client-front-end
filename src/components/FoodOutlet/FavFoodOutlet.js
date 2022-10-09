import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FavFoodOutlet = (props) => {
  return (
    <div>
      <div className="card shadow-sm">
        <img
          src={props.imageUrl}
          className="card-img-top fav-outlet-card-img"
          alt=""></img>
        <div className="card-body fav-outlet-card-body">
          <div className="card-title">
            <div className="row">
              <div className="fav-outlet-text-primary">{`${props.name} `}</div>
            </div>
          </div>
          <div className="card-text">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <FontAwesomeIcon icon={faStar} color="orange" />
                  <FontAwesomeIcon icon={faStar} color="orange" />
                  <FontAwesomeIcon icon={faStar} color="orange" />
                  <FontAwesomeIcon icon={faStar} color="orange" />
                  <FontAwesomeIcon icon={faStar} color="gray" />
                </div>
                <div className="fav-outlet-text-secondary">
                  {props.openingHrs}
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="btn btn-outline-info fav-outlet-btn">
                      Info
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      type="button"
                      className="btn btn-danger fav-outlet-btn"
                      onClick={props.onDelete}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavFoodOutlet;
