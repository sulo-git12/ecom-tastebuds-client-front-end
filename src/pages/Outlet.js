import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/outlet.css";

const Outlet = () => {
  const { _id } = useParams();

  const [outlet, setOutlet] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getOutletById = async (outletId) => {
    const url = `http://localhost:8088/api/outlets/${outletId}`;

    try {
      const { data } = await axios.get(url);
      setOutlet(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    getOutletById(_id);
  }, []);

  // ----------------------- Data Display Section

  if (!loading) return <p>Loading ....</p>;
  if (error) return console.log(error);
  if (!outlet) return null;

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="card shadow outlet-header-card">
            <img
              src={outlet.imageUrl}
              className="card-img-top shadow outlet-header-card-img-top"
              style={{ maxHeight: "350PX" }}
              alt=""></img>
            <div className="card-body">
              <div className="row">
                <div className="col-md-9">
                  <h5 className="card-title">
                    {`${outlet.name} (${outlet.address.city})`}
                    <span className="badge text-bg-success">OPEN</span>
                  </h5>
                  <div className="card-text">
                    <ul style={{ paddingLeft: "0px" }}>
                      {outlet.type.map((value, index) => {
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
                  <div>
                    <p>
                      Rating : {outlet.rating}{" "}
                      <FontAwesomeIcon icon={faStar} color="orange" />
                      <FontAwesomeIcon icon={faStar} color="orange" />
                      <FontAwesomeIcon icon={faStar} color="orange" />
                      <FontAwesomeIcon icon={faStar} color="orange" />
                      <FontAwesomeIcon icon={faStar} color="gray" />
                    </p>
                  </div>
                  <button
                    id="btnAddFavouriteOutletList"
                    type="button"
                    className="btn btn-danger">
                    Mark As Favourite
                  </button>{" "}
                  <button
                    id="btnViewOffers"
                    type="button"
                    className="btn btn-outline-success">
                    OFFERS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3 mb-3">
          <div className="col-md-6">
            <div className="card shadow outlet-header-card">
              <div className="card-header">
                <h5 className="card-title">Resturent Information ...</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="outlet-card-sub-titile">Address</div>
                    <div className="mt-2 p-2">
                      {`${outlet.address.no}, ${outlet.address.street}, ${outlet.address.city}.`}
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="outlet-card-sub-titile">Opening</div>
                    <div className="row mt-2 p-2">
                      <div className="col-md-6">
                        Days : {outlet.opening.days}
                      </div>
                      <div className="col-md-6">
                        Hours : {outlet.opening.hours}
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">Delivery Information</li>
                  <li className="list-group-item">
                    <div className="outlet-card-sub-titile">Contact</div>
                    <div className="mt-2 p-2">
                      <p>
                        If you have allergies or other dietary restrictions,
                        please contact the outlet. The outlet will provide food
                        specfic infomation upon request.
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          Call : {outlet.contactNo}
                        </div>
                        <div className="col-md-6">E-Mail :{outlet.email}</div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="outlet-card-sub-titile">Description</div>
                    <div className="mt-2 p-2">{outlet.description}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Outlet;
