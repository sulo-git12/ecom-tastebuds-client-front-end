import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../config.json";
import axios from "axios";
import capitalizeString from "capitalize-string";
import lowercase from "@stdlib/string-lowercase";
import ClipLoader from "react-spinners/ClipLoader";
import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMoneyBill1Wave,
  faMapLocationDot,
  faLocationArrow,
  faCalendarDays,
  faLocationCrosshairs,
  faMessage,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import GoogleMap from "../components/GoogleMap/GMapLocation";
import "../styles/outlet.css";

const FoodOutlet = () => {
  // Define a page parameter
  const { outletId } = useParams();

  // Declare a state variables
  const [foodOutlet, setFoodOutlet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get specific outlet details by outletId.
  const getFoodOutletById = async (prmOutletId) => {
    try {
      let URL =
        config.serverURL + config.foodOutletEndpointPath + `${prmOutletId}`;

      const { data } = await axios.get(URL);

      // console.log("Data successful retrieved");
      // console.log(data);

      setFoodOutlet(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(true);
    }
  };

  // call a function by page load
  useEffect(() => {
    getFoodOutletById(outletId);
  }, []);

  // Insert user's faviourte food outlets
  const insertFavFoodOutlet = async (prmUserId, prmOutletId) => {
    try {
      //Create a request body
      const bodyFavOutlet = {
        userId: prmUserId,
        foodOutletId: prmOutletId,
      };

      let URL = config.serverURL + config.favoritesEndpointPath;

      let insertedFavOutlet = await axios.post(URL, bodyFavOutlet);

      alert("Data successful inseterd.");
      console.log("Data successful inseterd");
      console.log(insertedFavOutlet);
    } catch (error) {
      console.log(error);
    }
  };

  const GoogleMapDirection = (sLat, sLlng, eLat, eLng, locationName) => {
    try {
      window.open(
        `https://www.google.com/maps/dir/${sLat},${sLlng}/${locationName}/@${eLat},${eLng},11z/`
      );
    } catch (error) {
      console.log(`Error = ${error.message}`);
    }
  };

  // ------------ start data display area

  // Loading spinner
  if (!loading)
    return (
      <div>
        <div className="spinner">
          <ClipLoader
            color={"#581845"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
          />
        </div>
      </div>
    );

  // Error occure
  if (error) {
    console.log(error);
  }

  //If there is no error & has outlet data
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="card shadow outlet-header-card">
            <img
              src={foodOutlet.imageUrl}
              className="card-img-top shadow outlet-header-card-img-top"
              alt="Food Outlet Image"></img>
            <div className="card-body">
              <div className="row">
                <div className="col-md-9">
                  <h5 className="card-title">
                    {capitalizeString(
                      `${foodOutlet.name} (${foodOutlet.address.city})`
                    )}{" "}
                    <span className="badge text-bg-success">OPEN</span>
                  </h5>
                  <div className="card-text">
                    <ul style={{ paddingLeft: "0px" }}>
                      {foodOutlet.type.map((value, index) => {
                        return (
                          <li className="outlet-type-li" key={index}>
                            {value}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-1">
                    Rating :
                    <Rating
                      size={28}
                      readonly={true}
                      initialValue={foodOutlet.rating}
                    />
                  </div>
                  <button
                    id="btnAddFavouriteOutletList"
                    type="button"
                    className="btn btn-danger outlet-btn"
                    onClick={() => {
                      insertFavFoodOutlet(
                        process.env.REACT_APP_LOGGED_USER_ID,
                        foodOutlet.outletNo
                      );
                    }}>
                    Add Favorite{" "}
                    <FontAwesomeIcon icon={faHeart} color="white" />
                  </button>{" "}
                  <button
                    id="btnViewOffers"
                    type="button"
                    className="btn btn-outline-success outlet-btn">
                    OFFERS{" "}
                    <FontAwesomeIcon icon={faMoneyBill1Wave} color="black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------ start food outlet information section */}

        <div className="row mt-3 mb-3">
          <div className="col-md-6">
            <div className="card shadow outlet-header-card">
              <div className="card-header">
                <h5 className="card-title">Resturent Information ...</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="outlet-card-sub-titile">
                      <FontAwesomeIcon
                        icon={faLocationCrosshairs}
                        color="black"
                      />{" "}
                      Address
                    </div>
                    <div className="mt-2 p-2">
                      {capitalizeString(
                        `${foodOutlet.address.no}, ${foodOutlet.address.street}, ${foodOutlet.address.city}.`
                      )}
                      {"   "}
                      <FontAwesomeIcon
                        icon={faLocationArrow}
                        color="green"
                        fontSize={"22px"}
                        onClick={() => {
                          GoogleMapDirection(
                            6.8511,
                            79.9212,
                            foodOutlet.location.latitude,
                            foodOutlet.location.longitude,
                            foodOutlet.address.city
                          );
                        }}
                      />
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="outlet-card-sub-titile">
                      <FontAwesomeIcon icon={faCalendarDays} color="black" />{" "}
                      Opening
                    </div>
                    <div className="row mt-2 p-2">
                      <div className="col-md-6">
                        Days : {foodOutlet.opening.days}
                      </div>
                      <div className="col-md-6">
                        Hours : {foodOutlet.opening.hours}
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="outlet-card-sub-titile">
                      <FontAwesomeIcon icon={faMapLocationDot} color="black" />{" "}
                      Location Information
                    </div>
                    <div className="mt-2 p-2">
                      <div className="map-container">
                        <GoogleMap
                          locationTitle={capitalizeString(foodOutlet.name)}
                          lat={foodOutlet.location.latitude}
                          lng={foodOutlet.location.longitude}
                          zoom={12}
                        />
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="outlet-card-sub-titile">
                      <FontAwesomeIcon icon={faMessage} color="black" /> {"  "}
                      Contact
                    </div>
                    <div className="mt-2 p-2">
                      <p>
                        If you have allergies or other dietary restrictions,
                        please contact the outlet. The outlet will provide food
                        specfic infomation upon request.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          Call : {foodOutlet.contactNo}
                        </div>
                        <div className="col-md-6">
                          E-Mail :{" "}
                          <a href={`mailto:${lowercase(foodOutlet.email)}`}>
                            {lowercase(foodOutlet.email)}
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="outlet-card-sub-titile">
                      <FontAwesomeIcon icon={faCircleInfo} color="black" />{" "}
                      Description
                    </div>
                    <div className="mt-2 p-2">{foodOutlet.description}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ------------------ end food outlet information section */}

          {/* ------------------ start food item information section */}

          <div className="col-md-6">
            <div className="card shadow outlet-header-card">
              <div className="card-header ">
                <h5 className="card-title">Awsome Food Items</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Most Popular</li>
                  <li className="list-group-item">Fast Growings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ------------------ end food item information section */}
        </div>
      </div>
    </div>
  );
};

export default FoodOutlet;
