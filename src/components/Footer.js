import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Get Help</a>
                </li>
                <li>
                  <a href="#">Add your restaurant</a>
                </li>
                <li>
                  <a href="#">Sign up to deliver</a>
                </li>
                <li>
                  <a href="#">Create a business account</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Taste Buds</h3>
              <p>
                Taste Buds near you in Colombo Browse Colombo restaurants
                serving Sri Lankan Food nearby, place your order.
              </p>
            </div>
          </div>
          <h3 className="copyright">
            Ocena Blue Technologies Inc. © {new Date().getFullYear()}
          </h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
