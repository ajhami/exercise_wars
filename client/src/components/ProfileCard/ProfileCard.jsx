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
            <NavLink to="/feedPage">
                <FontAwesomeIcon icon="info-circle" className="row info_icon fa-2x" />
            </NavLink>
            <CardTitle className="username_title">{props.username}</CardTitle>
            <CardImg top src={props.imageURL} alt="Profile Image" className="profile_card_img mt-4" />
            <CardBody className="profile_card" style={{ alignText: "center" }}>
                <CardSubtitle className="user_location_text">{props.location}</CardSubtitle>
                <div className="row">
                    <CardText style={{ marginLeft: "15px" }}>Followers: {props.followers} | Following: {props.following}</CardText>
                </div>
            </CardBody>
        </Card>
    );
};

export default ProfileCard;