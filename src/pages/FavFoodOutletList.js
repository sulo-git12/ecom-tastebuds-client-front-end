import React, { useState, useEffect } from "react";
import axios from "axios";
import capitalizeString from "capitalize-string";
import FavFoodOutlet from "../components/FoodOutlet/FavFoodOutlet";
import "../styles/outlet.css";

const FavFoodOutletList = () => {
  const [favFoodOutletsArr, setfavFoodOutletsArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const domain = "http://localhost:8088/";

  const getFavFoodOutlets = async (userId) => {
    try {
      console.log(userId);

      let apiEndPoint = `api/favourite_food_outlets/${userId}`;
      let URL = domain + apiEndPoint;

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

      setfavFoodOutletsArr(formatedFavFoodOutlets);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    getFavFoodOutlets(1);
  }, []);

  const deleteFavFoodOutlet = async (userId, outletId) => {
    try {
      let apiEndPoint = `api/favourite_food_outlets/${userId}/${outletId}`;
      let URL = domain + apiEndPoint;

      await axios.delete(URL);
      let newfavFoodOutletsArr = favFoodOutletsArr.filter((outlet) => {
        return outlet.outletNo !== outletId;
      });
      setfavFoodOutletsArr(newfavFoodOutletsArr);
      console.log("Deleted Sucessfully");
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(true);
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row m-3">
          <p> {`Home > Faviourte Food Outlet`}</p>
          <h3>My Faviourte Food Outlet List on Tastebuds</h3>
          <hr />
        </div>

        <div className="row m-2">
          {favFoodOutletsArr.map((outlet) => {
            return (
              <div className="col-md-4 mb-3" key={outlet.id}>
                <FavFoodOutlet
                  key={outlet.id}
                  outletId={outlet.id}
                  outletNo={outlet.outletNo}
                  name={outlet.name}
                  openingHrs={outlet.openingHrs}
                  rating={outlet.rating}
                  imageUrl={outlet.imageUrl}
                  isActive={outlet.isActive}
                  onDelete={() => {
                    deleteFavFoodOutlet(1, outlet.outletNo);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FavFoodOutletList;
