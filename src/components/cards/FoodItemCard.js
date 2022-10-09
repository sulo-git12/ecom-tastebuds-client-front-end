const FoodItemCard = ({ productName, imageSrc, description, size, price, item}) => {
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
          <button className="btn btn-primary" >Add to Cart</button>
        </div>
      </div>
    )
}

export default FoodItemCard;