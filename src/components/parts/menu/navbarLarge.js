import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form, FormControl, Button } from "react-bootstrap";
import logo from "../../../assets/images/disney-hotstar-logo-dark.svg";
import kids from "../../../assets/images/kids.svg";
import { HeaderContext } from "../header";

export default function NavbarLarge() {
  const { dropdown, setDropdown, setSearchResultLg } = useContext(
    HeaderContext
  );

  return (
    <div
      className="d-none d-lg-flex justify-content-lg-between nav-container align-items-center"
      id="large"
    >
      <div className="d-lg-flex justify-content-lg-between align-items-lg-center">
        <div className="mt-xl-3 d-lg-block">
          <i className="bx bx-menu" onClick={() => setDropdown(!dropdown)}></i>
        </div>
        <div className="ml-lg-3 mr-lg-2">
          <Link to="/">
            <img src={logo} alt="" className="logo-disney" />
          </Link>
        </div>
        <div id="serial" className="px-xl-3 d-lg-none d-xl-block">
          <span>Serial</span>
        </div>
        <div id="film" className="px-xl-3 d-lg-none d-xl-block">
          <span>Film</span>
        </div>
        <div id="disney" className="px-xl-3 d-lg-none d-xl-block">
          <span>Disney+</span>
        </div>
        <div id="local" className="px-xl-3 d-lg-none d-xl-block">
          <span>Local</span>
        </div>
        <div id="kids" className="px-xl-3 d-lg-none d-xl-block">
          <img src={kids} alt="disney+" />
        </div>
      </div>
      <div className="d-lg-flex justify-content-between align-items-end">
        <div className="position-relative" id="search">
          <Form>
            <FormControl
              type="text"
              placeholder="Cari"
              className="search-input pr-xl-4"
              onFocus={() => setSearchResultLg(true)}
              onBlur={() => setSearchResultLg(false)}
            />
            <i className="bx bx-search position-absolute"></i>
          </Form>
        </div>
        <div className="mx-lg-2">
          <Button size="sm" className="subscribe">
            Login
          </Button>
        </div>
        <div id="sign-in">
          <span>Signup</span>
        </div>
      </div>
    </div>
  );
}
