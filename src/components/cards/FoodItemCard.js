const FoodItemCard = ({ productName, imageSrc, description, size, price}) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center">{productName}</h5>
          <img src={imageSrc}
          className="card-img-top" style={{ maxHeight: "250px" }} ></img>
          <h6 className="card-subtitle text-muted" style={{marginTop: "15px"}}>
             {description}
          </h6><br></br>
          <h6>Size: {size}</h6>
          <h5>LKR {price}</h5>
          <a className="btn btn-primary">
            Order Now
            <span className="badge text-bg-light"></span>
          </a>
        </div>
      </div>
    )
}

export default FoodItemCard;