import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
function Works() {
    return (
        <div className="card work-card" >
                {/* <img className="card-img-top" src={process.env.PUBLIC_URL +"/assets/images/group_demo_img.jpg"} alt="Card image cap" > */}
                <img className="card-img-top" src={process.env.PUBLIC_URL +"/assets/images/logo/dumbell_logo_192x192.png"} alt="Card image cap" >
                   
                    </img>
                <div className="card-body d-flex align-items-center justify-content-center">
                    <a href="/Portfolio" className="btn btn-primary">Projects</a>
                </div>
            </div>


    );
};


export default Works