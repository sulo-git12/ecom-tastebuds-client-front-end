import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
import "../styles/outlet.css";

const FoodOutlet = () => {
  const { outletId } = useParams();

  const [foodOutlet, setFoodOutlet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const domain = "http://localhost:8088/";

  // Get specific outlet details by outletId.
  const getFoodOutletById = async (prmOutletId) => {
    try {
      let apiEndPoint = `api/food_outlets/${prmOutletId}`;
      let URL = domain + apiEndPoint;

      const { data } = await axios.get(URL);
      setFoodOutlet(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(true);
    }
  };

  // call a function by page load
  useEffect(() => {
    getFoodOutletById(outletId);
  }, []);

  // Insert user's faviourte food outlets
  const insertFavFoodOutlet = (prmUserId, prmOutletId) => {
    try {
      const bodyFavOutlet = {
        userId: prmUserId,
        foodOutletId: prmOutletId,
      };

      let apiEndPoint = "api/favourite_food_outlets";
      let URL = domain + apiEndPoint;

      axios.post(URL, bodyFavOutlet);
    } catch (err) {
      console.log("Error", err.messsage);
      setError(err);
    }
  };

  const GoogleMapDirection = (sLat, sLlng, eLat, eLng, locationName) => {
    window.open(
      `https://www.google.com/maps/dir/${sLat},${sLlng}/${locationName}/@${eLat},${eLng},11z/`
    );
  };

  // ------------ start data display arear

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
  if (error) return console.log(error);

  // If not there is outlet data
  if (!foodOutlet) return console.log(`Outlet Nometha`);

  //If there is outlet data
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
                      insertFavFoodOutlet("1", foodOutlet.outletNo);
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
                      <div className="map-container">Map data</div>
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
