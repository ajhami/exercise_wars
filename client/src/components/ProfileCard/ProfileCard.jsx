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
import { Link } from "react-router-dom";



function ProfileCard(props) {
    return (
        <Card className="profile_card col-md-4">
            <CardImg top src={props.imageURL} alt="Profile Image" className="profile_card_img" />
            <CardBody>
                <CardTitle className="username_title">{props.username}</CardTitle>
                <CardSubtitle className="user_location_text">{props.location}</CardSubtitle>
                <div className="row">
                        <CardText><Link to="#">Followers:</Link> {props.followersCount}</CardText>
                    <p>|</p>
                    {/* <Link to="#"> */}
                        <CardText><Link to="#">Following:</Link> {props.followingCount}</CardText>
                    {/* </Link> */}
                </div>
            </CardBody>
        </Card>
    );
};

export default ProfileCard;