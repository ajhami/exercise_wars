import React from "react";
import {
    Card,
    CardImg,
    // CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";
import "./style.css";

function FriendSuggestions(props) {
    return (
            <Card key={props.id}>
                <CardImg className="friend_sug_img" src={process.env.PUBLIC_URL + "/assets/images/" + props.profileImg} alt={props.id} />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardSubtitle>from {props.location}</CardSubtitle>
                    <Button className="follow_btn">Follow</Button>
                    <Button id="next_friend_btn"><i className="fa fa-chevron-right chev_style"></i></Button>
                </CardBody>
            </Card>
    )
}

export default FriendSuggestions;