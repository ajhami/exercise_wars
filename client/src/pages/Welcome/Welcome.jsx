import React from "react";
import "./style.css";
import {
    Navbar,
    NavbarBrand,
    NavItem
} from "reactstrap";


function Welcome() {
    return (
        <div>
            <Navbar className="welcome_navbar" color="light" light expand="md">
                {/* <div className="row"> */}
                <div className="col-6">
                    <NavbarBrand className="welcome_navbrand_section">
                        <img className="welcome_navbrand_img" src={process.env.PUBLIC_URL + "/assets/images/logo/exercise_wars_title.png"} alt="EW Logo" />
                    </NavbarBrand>
                </div>
                <div className="welcome_nav_login_atag_section col-6 d-none d-sm-block">
                    <a className="welcome_nav_login_atag" href="/Login">Login</a>
                </div>
                {/* </div> */}
            </Navbar>
            {/* <img 
                src={process.env.PUBLIC_URL + "/assets/images/welcomepage.jpg"} 
                alt="Welcomepage Image"
                className="welcomepage_img"    
            >
            </img> */}
            <div className="exclaim_section">
                <h1 className="exclaim_title">Challenge Yourself with</h1>
                <h1 className="exclaim_title">Exercise Wars!</h1>
                <div className="exclaim_signup_atag_section">
                    <a className="exclaim_signup_atag" href="/Signup">Get Started</a>
                </div>
            </div>
        </div>

        // <span>Photo by <a href="https://unsplash.com/@sebastianpoc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sebastian Pociecha</a> on <a href="https://unsplash.com/s/photos/home-workout?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    )
}

export default Welcome;