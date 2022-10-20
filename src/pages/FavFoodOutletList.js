import React, { useState, useEffect } from "react";
import config from "../config.json";
import axios from "axios";
import capitalizeString from "capitalize-string";
import ClipLoader from "react-spinners/ClipLoader";
import Error from "../components/Error/Error";
import FavFoodOutlet from "../components/FavFoodOutlet/FavFoodOutlet";
import "../styles/outlet.css";

const FavFoodOutletList = () => {
  // Declare a state variables
  const [favFoodOutletsArr, setFavFoodOutletsArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //Get user's favorite food outlet list
  const getFavFoodOutlets = async (prmUserId) => {
    try {
      let URL =
        config.serverURL + config.favoritesEndpointPath + `${prmUserId}`;

      const { data } = await axios.get(URL);
      let formatedFavFoodOutlets = data.map((outlet) => {
        return {
          id: outlet._id,
          outletNo: outlet.outletNo,
          name: capitalizeString(`${outlet.name} (${outlet.address.city})`),
          openingHrs: outlet.opening.hours,
          rating: outlet.rating,
          imageUrl: outlet.imageUrl,
          isActive: outlet.isActive ? "Active" : "InActive",
        };
      });

      // console.log(formatedFavFoodOutlets);
      setFavFoodOutletsArr(formatedFavFoodOutlets);
    } catch (error) {
      if (error.response) {
        console.log(
          `Error = Status Code : ${error.response.status}, Title : ${error.response.data.statusCode}, Message : ${error.response.data.message}`
        );
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(`Error = ${error.message}`);
      }
      setError(error);
    } finally {
      setIsLoading(true);
    }
  };

  // call a function by page load
  useEffect(() => {
    getFavFoodOutlets(process.env.REACT_APP_LOGGED_USER_ID);
  }, []);

  //Delete user's favorite food outlet
  const deleteFavFoodOutlet = async (prmUserId, prmOutletId) => {
    try {
      let URL =
        config.serverURL +
        config.favoritesEndpointPath +
        `${prmUserId}/${prmOutletId}`;

      await axios.delete(URL);
      let newfavFoodOutletsArr = favFoodOutletsArr.filter((outlet) => {
        return outlet.outletNo !== prmOutletId;
      });
      setFavFoodOutletsArr(newfavFoodOutletsArr);
      console.log("Deleted Sucessfully");
    } catch (error) {
      if (error.response) {
        console.log(
          `Error = Status Code : ${error.response.status}, Title : ${error.response.data.statusCode}, Message : ${error.response.data.message}`
        );
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(`Error = ${error.message}`);
      }
    }
  };

  // ------------ start data display area
  // Loading spinner
  if (!isLoading)
    return (
      <div>
        <div className="spinner">
          <ClipLoader
            color={"#581845"}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
          />
        </div>
      </div>
    );

  return (
    <div>
      <div className="container-fluid">
        <div className="row m-3">
          <p> {`Home > Faviourte Food Outlet`}</p>
          <h3>My Faviourte Food Outlet List on Tastebuds</h3>
          <hr />
        </div>

        <div className="row m-2">
          {error ? (
            error.response.status === 404 ? (
              <div className="page-middle">
                Your Favourite Food List is Empty.
              </div>
            ) : (
              <div>
                <Error
                  code={error.response.status}
                  title={error.response.data.statusCode}
                  message={error.response.data.message}
                />
              </div>
            )
          ) : (
            favFoodOutletsArr.map((outlet) => {
              return (
                <div className="col-md-4 mb-3" key={outlet.id}>
                  <FavFoodOutlet
                    key={outlet.id}
                    favOutlet={outlet}
                    onDelete={() => {
                      deleteFavFoodOutlet(
                        process.env.REACT_APP_LOGGED_USER_ID,
                        outlet.outletNo
                      );
                    }}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default FavFoodOutletList;
