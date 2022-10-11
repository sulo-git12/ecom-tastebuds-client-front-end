import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../config.json";
import axios from "axios";
import Food from "../components/foods/Food";
import Rating from "@mui/material/Rating";
import base64 from "base-64";

const Foods = () => {
  const { _id } = useParams();
  const [foodArr, setFoodArr] = useState([]);
  const [outletArr, setOutletArr] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);
  const getAllfoodsByOutletId = async (outletId) => {
    try {
      const { data } = await axios.get(
        config.serverURL + config.outletFoodsEndpointPath + `${outletId}`
      );
      let foods = data.map((food) => {
        return {
          id: food._id,
          imgUrl: food.imageUrl,
          name: food.name,
          itemNo: food.itemNo,
          price: food.price,
          rating: food.rating,
        };
      });
      setFoodArr(foods);
      setisLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  const getOutletByOutletId = async (outletId) => {
    try {
      const { data } = await axios.get(
        config.serverURL + config.foodOutletEndpointPath + `${outletId}`
      );
      setOutletArr(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllfoodsByOutletId(base64.decode(_id));
    getOutletByOutletId(base64.decode(_id));
  }, []);

  return (
    <div>
      <section className="jumbotron text-center">
        <div className="container">
          <br />
          <h1 className="jumbotron-heading">
            Sri Lankan Foods Delivery in Colombo Near Me
          </h1>
          <p className="lead text-muted">
            Enjoy Sri Lankan Food delivery and takeaway with Taste Buds near you
            in Colombo Browse Colombo restaurants serving Sri Lankan Food
            nearby, place your order and enjoy! Your order will be delivered in
            minutes and you can track its ETA while you wait.
          </p>
        </div>
        <div className="card mb-3">
          <img
            src={outletArr.imageUrl}
            className="card-img-top"
            alt="..."
            style={{ maxHeight: "18rem" }}
          />
          <div className="card-body">
            <h4 className="card-title"> {outletArr.name}</h4>
            <p className="card-text">{outletArr.description} </p>

            <p className="card-text">
              <small className="text-muted">
                <Rating
                  name="size-medium"
                  value={outletArr.rating ? outletArr.rating : 0}
                  readOnly
                />
              </small>
            </p>
          </div>
        </div>
      </section>
      <div
        className="row row row-cols-1 row-cols-md-4 g-4"
        style={{ paddingLeft: "8px", paddingRight: "8px" }}
      >
        {isLoaded ? (
          foodArr.map((food) => {
            return (
              <div className="col" key={food.id}>
                <Food key={food.id} food={food} />
              </div>
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </div>
      <br />
    </div>
  );
};
export default Foods;
