import React from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const FavFoodOutlet = (props) => {
  return (
    <div>
      <div className="card shadow-sm">
        <img
          src={props.favOutlet.imageUrl}
          className="card-img-top fav-outlet-card-img"
          alt="outlet imag"></img>
        <div className="card-body fav-outlet-card-body">
          <div className="card-title">
            <div className="row">
              <div className="fav-outlet-text-primary">{`${props.favOutlet.name} `}</div>
            </div>
          </div>
          <div className="card-text">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <Rating
                    size={28}
                    readonly={true}
                    initialValue={props.favOutlet.rating}
                  />
                </div>
                <div className="fav-outlet-text-secondary">
                  {props.favOutlet.openingHrs}
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <Link to={`/FoodOutlets/${props.favOutlet.outletNo}`}>
                      <button
                        type="button"
                        className="btn btn-outline-info fav-outlet-btn">
                        Info
                      </button>
                    </Link>
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
