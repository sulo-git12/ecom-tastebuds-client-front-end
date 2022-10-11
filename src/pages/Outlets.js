import React, { useEffect, useState } from "react";
import config from "../config.json";
import axios from "axios";
import Outlet from "../components/outlets/Outlet";

const Outlets = () => {
  const [outletArr, setOutletArr] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  const getAlloutlets = async () => {
    try {
      const { data } = await axios.get(config.apiOutletsEndpoint);
      let outlets = data.map((outlet) => {
        return {
          id: outlet._id,
          outletId: outlet.outletNo,
          imgUrl: outlet.imageUrl,
          name: outlet.name,
          address: outlet.address,
          opening: outlet.opening,
          type: outlet.type,
          rating: outlet.rating,
        };
      });
      setOutletArr(outlets);
      setisLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAlloutlets();
  }, []);

  return (
    <div>
      <section className="jumbotron text-center">
        <div className="container">
          <br />
          <h1 className="jumbotron-heading">
            Sri Lankan Food Outlets in Colombo Near Me
          </h1>
          <p className="lead text-muted">
            Enjoy Sri Lankan Food delivery and takeaway with Taste Buds near you
            in Colombo Browse Colombo restaurants serving Sri Lankan Food
            nearby, place your order and enjoy! Your order will be delivered in
            minutes and you can track its ETA while you wait.
          </p>
        </div>
      </section>
      <div
        className="row row-cols-1 row-cols-md-4 g-4"
        style={{ paddingLeft: "8px",paddingRight: "8px"}}
      >
        {isLoaded ? (
          outletArr.map((outlet) => {
            return (
              <div className="col" key={outlet.id}>
                <Outlet key={outlet.id} outlet={outlet} />
              </div>
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </div><br/>
    </div>
  );
};
export default Outlets;
