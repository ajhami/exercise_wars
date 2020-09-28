import React, { useEffect, useState } from "react";
import * as actions from "./../../actions";
import requireAuth from "./../../components/requireAuth";
import { compose } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";
import "./style.css";
import AddProfilePicture from "../../components/SaveWorkout/AddProfilePicture";






const UserInfo = props => {

    const [profileData, setProfileData] = useState({
        image: props.image,
        userLoc: props.userLoc,
        userHeight: props.userHeight,
        userWeight: props.userWeight,
        name: `${props.firstName} ${props.lastName}`,
        username: props.username,
        userAge: moment().diff(`${props.birthday}`, 'years', false)
    });

    useEffect(() => {
        props.getProfileData()
            .then(() => {
                if (profileData.userLoc == "") {
                    props.history.push("/Home");
                }
            });
    }, [])

    
    
    const changeProfileData = (type, val) => {
        document.getElementById("settings_form_btn").classList.remove("hide");
        document.getElementById("settings_form_btn").classList.add("show");
        setProfileData({ ...props.profileData, [type]: val });
    };

    const updateProfileImg = (val) => {
        setProfileData({ ...props.profileData, image: val });
        
        let imageObject = {
            token: localStorage.token,
            imageURL: val
        }

        props.updateProfileImg(imageObject);

    };


    
    const updateProfileData = (data) => {
        props.updateProfile(data, () => {
            props.history.push("/Home");
        });
    }



    return (

        <div>
            <NavBar />

            {/* Profile and edit to left, user only feed to right */}

            <Container>
                <Row className="mt-4 mb-4">
                    <Col className="col-md-6 profile_col">
                        <Row className="mb-4">
                            <h1>{props.user.firstName}'s Profile</h1>
                        </Row>

                        <Row className="profile_img_title">
                            <h3>Profile Image</h3>
                        </Row>

                        <Row>
                            <Col>
                                <AddProfilePicture
                                value={profileData.image}
                                onImageChange={(image) => {
                                    updateProfileImg(image);
                                }
                                }
                                >
                                    <form
                                        action="/profile"
                                        method="post"
                                        enctype="multipart/form-data">
                                        <input
                                            type="file"
                                            name="avatar" />
                                    </form>
                                </AddProfilePicture>
                            </Col>
                        </Row>
                        <Form id="profile_settings_form">
                            <FormGroup>
                                <Row>
                                    <Label for="location">Location</Label>
                                    <Input
                                        type="text"
                                        name="location"
                                        id="editLocation"
                                        value={profileData.userLoc}
                                        onChange={event => {
                                            event.preventDefault();
                                            changeProfileData("userLoc", event.target.value)
                                        }}
                                    />
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Label for="height">Height</Label>
                                    <Input
                                        type="number"
                                        name="height"
                                        id="editHeight"
                                        value={profileData.userHeight}
                                        onChange={event => {
                                            event.preventDefault();
                                            changeProfileData("userHeight", event.target.value)
                                        }}
                                    />
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Label for="weight">Weight</Label>
                                    <Input
                                        type="number"
                                        name="weight"
                                        id="editWeight"
                                        value={profileData.userWeight}
                                        onChange={event => {
                                            event.preventDefault();
                                            changeProfileData("userWeight", event.target.value)
                                        }}
                                    />
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Label for="name">Name</Label>
                                    <Input
                                        readOnly
                                        type="text"
                                        name="name"
                                        id="nameSet"
                                        value={profileData.name}
                                    />
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Label for="username">Username</Label>
                                    <Input
                                        readOnly
                                        type="text"
                                        name="username"
                                        id="usernameSet"
                                        value={profileData.username}
                                    />
                                </Row>
                            </FormGroup>

                            <FormGroup>
                                <Row>
                                    <Label for="age">Age</Label>
                                    <Input
                                        readOnly
                                        type="number"
                                        name="age"
                                        id="ageSet"
                                        value={profileData.userAge}
                                    />
                                </Row>
                            </FormGroup>

                            <Button
                                className="change_settings_btn hide"
                                id="settings_form_btn"
                                onClick={(event) => {
                                    event.preventDefault();
                                    
                                    let updatedProfileData = {
                                        token: localStorage.token,
                                        location: document.getElementById("editLocation").value,
                                        height: document.getElementById("editHeight").value,
                                        weight: document.getElementById("editWeight").value,
                                    }
                                    
                                    updateProfileData(updatedProfileData);
                                }}
                            >
                                Save Changes
                            </Button>

                        </Form>
                    </Col>
                    <Col className="col-md-6">FEED</Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );

};


function mapStateToProps(state) {
    return {
        user: state.user.user,
        image: state.user.user.imageURL,
        userLoc: state.user.user.location,
        userHeight: state.user.user.height,
        userWeight: state.user.user.weight,
        firstName: state.user.user.firstName,
        lastName: state.user.user.lastName,
        username: state.user.user.username,
        birthday: state.user.user.birthday
    }
}

export default requireAuth(compose(
    connect(mapStateToProps, actions)
)(UserInfo));