import React from "react";
import "./style.css";
import gplay from "../../../assets/images/gplay.svg";
import appstore from "../../../assets/images/appstore.svg";

export default function Footer() {
  return (
    <footer className="footer my-5 py-4">
      <div className="row no-gutters">
        <div className="col-12 col-md-7 col-xl-7">
          <div className="menu">
            <ul>
              <li>About Disney+ Hotstar</li>
              <li>Terms of Use</li>
              <li>Privacy policy</li>
              <li>Faq</li>
              <li>Feedback</li>
            </ul>
            <p>
            © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
            </p>
          </div>
        </div>
        <div className="col-6 col-md-2 col-xl-2">
          <div className="connect-us">
            <span className="d-block con">Connect with us</span>
            <span className="fb mt-2 mt-xl-3 p-2 rounded">
              <i className="bx bxl-facebook text-center"></i>
            </span>
            <span className="twitter mt-2 mt-xl-3 mx-2 p-2 rounded">
              <i className="bx bxl-twitter"></i>
            </span>
          </div>
        </div>
        <div className="col-6 col-md-2 col-xl-3">
          <div className="app">
            <span className="d-block con">Disney+ Hotstar App</span>
            <div className="mt-xl-2">
              <img src={gplay} alt="" className="my-2 mr-sm-2 mr-xl-2" />
              <img src={appstore} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
