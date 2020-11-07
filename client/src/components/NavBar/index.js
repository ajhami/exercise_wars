import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from "reactstrap";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar() {
  return (
    <Navbar className="navbar navbar-expand navbar-light bg-light"
      style={{ margin: "0px" }}>
        

      <NavLink className="navbar-brand"
        to="/Home"
        style={{ paddingRight: "20px" }}
        activestyle={{ color: "red" }}
        exact>
        <img className="welcome_navbrand_img mr-1" src={process.env.PUBLIC_URL + "/assets/images/logo/apple-touch-icon.png"} alt="EW icon"
          style={{ width: "30px", height: "30px" }} />
        <span className="d-none d-sm-block">Home</span>
      </NavLink>

        <Nav className="mr-auto">


          <NavLink
            to="/SearchProfiles"
            className="nav-link"
            style={{ color: "darkGray", paddingBottom: "0px" }}
            activeStyle={{ color: "red" }}
            exact
          >
            <FontAwesomeIcon icon="users" />
            <span className="d-block d-sm-none"></span>
            <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Profiles</span>


          </NavLink>



          <NavLink
            to="/FeedPage"
            className="nav-link"
            style={{ color: "darkGray" }}
            activeStyle={{ color: "red" }}
            exact
          >
            <FontAwesomeIcon icon="dumbbell" />
            <span className="d-block d-sm-none"></span>
            <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Feed</span>
          </NavLink>



          <NavLink
            to="/AddWorkout"
            className="nav-link"
            style={{ color: "darkGray" }}
            activeStyle={{ color: "red" }}
            onClick={localStorage.removeItem("newWorkout")}
            exact
          >
            <FontAwesomeIcon icon="plus" />
            <span className="d-block d-sm-none"></span>
            <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Add</span>
          </NavLink>



          <NavLink
            to="/SoloChallenge"
            className="nav-link"
            style={{ color: "darkGray" }}
            activeStyle={{ color: "red" }}
            exact
          >
            <FontAwesomeIcon icon="stopwatch" />
            <span className="d-block d-sm-none"></span>
            <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Challenges</span>

          </NavLink>

        </Nav>

        <NavLink
            to="/Logout"
            className="nav-link"
            style={{ color: "darkGray", paddingBottom: "0px" }}
            activeStyle={{ color: "red" }}
            exact
          >
            <FontAwesomeIcon icon={['fas', 'sign-out-alt']} />
            <span className="d-block d-sm-none"></span>
            <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Logout</span>


          </NavLink>

    </Navbar>
  );
}

export default NavBar