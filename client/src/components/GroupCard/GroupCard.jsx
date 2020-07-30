import React from "react";
import "./style.css";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    // CardSubtitle,
    Button
} from "reactstrap";

function GroupCard(props) {
    return (
        <div className="cardSection">
            <Card className="groupCard">
                <CardBody>
                    <CardTitle>{props.groupName}</CardTitle>
                    <CardImg className="group_img" src={process.env.PUBLIC_URL + "/assets/images/" + props.groupImg} />
                    <CardText>{props.description}</CardText>
                    <Button className="follow_btn">Follow</Button>
                    <Button className="challenges_btn">View Challenges</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default GroupCard;