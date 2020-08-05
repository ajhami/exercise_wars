import React from "react";
import "./style.css";


function Welcome() {
    return(
        <div>
            {/* <img 
                src={process.env.PUBLIC_URL + "/assets/images/welcomepage.jpg"} 
                alt="Welcomepage Image"
                className="welcomepage_img"    
            >
            </img> */}
            <div className="exclaim_section">
                <h1 className="exclaim_title">Challenge Yourself with Exercise Wars!</h1>
            </div>
            <a href="/Signup">Sign Up Here</a>
            <a href="/Login">Login Here</a>
        </div>
        
        // <span>Photo by <a href="https://unsplash.com/@sebastianpoc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sebastian Pociecha</a> on <a href="https://unsplash.com/s/photos/home-workout?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    )
}

export default Welcome;