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
                // Trying to find the uploaded imageurl in value
                // console.log(document.getElementById("profile_image_upload").value);
                
                if (profileData.userLoc == "") {
                    props.history.push("/Home");
                }
            });
    }, [])

    
    
    const changeProfileData = (type, val) => {
        // console.log(type);
        console.log(val);
        // console.log([type]);
        document.getElementById("settings_form_btn").classList.remove("hide");
        document.getElementById("settings_form_btn").classList.add("show");
        setProfileData({ ...props.profileData, [type]: val });
        // setProfileData({ [type]: val });
    };

    const updateProfileImg = (val) => {
        // console.log(type);
        console.log(val);
        // console.log([type]);
        // document.getElementById("settings_form_btn").classList.remove("hide");
        // document.getElementById("settings_form_btn").classList.add("show");
        setProfileData({ ...props.profileData, image: val });
        
        let imageObject = {
            token: localStorage.token,
            imageURL: val
        }

        // REMEMBER TO CREATE THE POST ROUTE TO SAVE UPLOADED IMAGE TO MONGOOSE
        props.updateProfileImg(imageObject);
        
        // setProfileData({ [type]: val });
    };


    
    const updateProfileData = (data) => {
        console.log("reached updateProfileData function!");
        console.log(data);
        props.updateProfile(data, () => {
            console.log("Hit end of updateProfile promise!");
            props.history.push("/Home");
        });
    }


    console.log(props);
    console.log(profileData);
    // console.log(profileData.userLoc);

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

                        {/* <Row>
                            <Col>
                                <img src={props.user.imageURL} alt="current_profile" className="profile_img" />
                                <img src={profileData.image} alt="current_profile" className="profile_img" />
                            </Col>
                        </Row> */}
                        <Row>
                            <Col>
                                {/* Not ready yet!! */}
                                <AddProfilePicture
                                //     id="profile_image_upload"
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
                                            // this.setState({})
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
                                            // this.setState({})
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
                                            // this.setState({})
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
                                    console.log("Hit form submit!");
                                    // console.log(profileData);
                                    // console.log(localStorage.token);
                                    // console.log(document.getElementById("editLocation").value);
                                    // console.log(document.getElementById("editHeight").value);
                                    // console.log(document.getElementById("editWeight").value);
                                    // console.log(document.getElementById("nameSet").value);
                                    // console.log(document.getElementById("usernameSet").value);
                                    // console.log(document.getElementById("ageSet").value);
                                    
                                    let updatedProfileData = {
                                        token: localStorage.token,
                                        // ADD PROFILE IMAGE TO THE CHAIN
                                        location: document.getElementById("editLocation").value,
                                        height: document.getElementById("editHeight").value,
                                        weight: document.getElementById("editWeight").value,
                                    }
                                    
                                    console.log("Updated Profile Data to Change:");
                                    console.log(updatedProfileData);
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

            {/* <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <h1>{this.props.user.username}</h1>
                            </div>

                        </div>
                        <div className="col-md-6">FEED</div>
                    </div>
                </div> */}


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









// class UserInfo extends Component {

//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         userLoc: props.userLoc
//     //     }
//     // }

//     componentDidMount = () => {
//         this.props.getProfileData();
//         // const [profileData, setProfileData] = useState({
//         //     location: this.props.user.location      
//         // });
//         // this.state = {
//         //     userLoc: this.props.userLoc
//         // }
//     };

//     changeProfileData = (type, val) => {
//         // console.log(type);
//         console.log(val);
//         // console.log([type]);
//         this.setState({ userLoc: val });
//     };

//     render() {


//         console.log(this.props);
//         console.log(this.props.userLoc);

//         const [profileData, setProfileData] = useState({
//             userLoc: this.props.userLoc
//         })




//         return (

//             <div>
//                 <NavBar />

//                 {/* Profile and edit to left, user only feed to right */}

//                 <Container>
//                     <Row className="mt-4 mb-4">
//                         <Col className="col-md-6 profile_col">
//                             <Row className="username_row">
//                                 <h1>{this.props.user.username}</h1>
//                             </Row>
//                             <Row>
//                                 <Col>
//                                     <img src={this.props.user.imageURL} alt="current_profile" className="profile_img" />
//                                 </Col>
//                             </Row>
//                             <Row>
//                                 <Col>
//                                     {/* Not ready yet!! */}
//                                     <AddPicture
//                                         id="image"
//                                     // value={props.workoutInputs.image}
//                                     // onImageChange={(image) => {
//                                     //     handleChange("image", image);
//                                     // }
//                                     // }
//                                     >
//                                         <form
//                                             action="/profile"
//                                             method="post"
//                                             enctype="multipart/form-data">
//                                             <input
//                                                 type="file"
//                                                 name="avatar" />
//                                         </form>
//                                     </AddPicture>
//                                 </Col>
//                             </Row>
//                             <Form>
//                                 <FormGroup>
//                                     <Row>
//                                         <Label for="location" >Location</Label>
//                                         <Input
//                                             type="text"
//                                             name="location"
//                                             id="editLocation"
//                                             value={this.props.userLoc}
//                                             onChange={event => {
//                                                 event.preventDefault();
//                                                 this.changeProfileData("userLoc", event.target.value)
//                                                 // this.setState({})
//                                             }}
//                                         />
//                                     </Row>
//                                 </FormGroup>
//                             </Form>
//                         </Col>
//                         <Col className="col-md-6">FEED</Col>
//                     </Row>
//                 </Container>

//                 {/* <div className="container">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <div className="row">
//                                 <h1>{this.props.user.username}</h1>
//                             </div>

//                         </div>
//                         <div className="col-md-6">FEED</div>
//                     </div>
//                 </div> */}


//                 <Footer />
//             </div>
//         );
//     };
// };


// function mapStateToProps(state) {
//     return {
//         user: state.user.user,
//         userLoc: state.user.user.location
//     }
// }

// export default requireAuth(compose(
//     connect(mapStateToProps, actions)
// )(UserInfo));
