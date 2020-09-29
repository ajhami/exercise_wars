import React from "react";
import "./profilecard.css";
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    CardSubtitle
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";



function ProfileCard(props) {

    return (
        <Card className="profile_card col-md-4">
            <NavLink to="/userInfo">
                <FontAwesomeIcon icon="info-circle" className="row info_icon fa-2x" />
            </NavLink>
            <CardTitle className="username_title">{props.username}</CardTitle>
            <div className="profile_card_img_div">
                <CardImg top src={props.imageURL} alt="Profile Image" className="profile_card_img" />
            </div>
            <CardBody className="profile_card">
                <CardSubtitle className="user_location_text">{props.location}</CardSubtitle>
                <div className="row">
                    <div className="col-6">
                        <CardText className="followers_info">
                            Followers: {props.followers}
                        </CardText>
                    </div>
                    <div className="col-6">
                        <CardText className="following_info">
                            Following: {props.following}
                        </CardText>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default ProfileCard;