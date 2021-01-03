import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { Card, CardTitle, Container, Row, Col, Button } from "reactstrap";
import * as actions from "../../actions";
import "./style.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import requireAuth from "../../components/requireAuth";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchProfiles extends Component {

    componentDidMount = () => {
        this.props.getProfileData()
    };
    componentDidUpdate = () => {
        this.props.getProfileData();
    }
    onSubmitFriendSearch = (formProps) => {
        this.props.searchUsers(formProps);
    };
    render() {
        let currentlyFollowing = this.props.user.following;
        const { handleSubmit } = this.props;
        let hasSearchResults = this.props.searchedUsers || false;
        let matchResults;
        if (hasSearchResults.length === 0) {
            matchResults = (
                <div className="noresults_div">
                    <h3 className="noresults_text">No results found.</h3>
                </div>
            )
        }
        else if (hasSearchResults[0].username === "") {
            matchResults = null;
        }
        else if (hasSearchResults) {
            let searchedUsers = this.props.searchedUsers;
            // let currentlyFollowing = this.props.user.following;
            let currentlyFollowingUsernames = [];
            //adding buttons
            for (let i = 0; i < currentlyFollowing.length; i++) {
                currentlyFollowingUsernames.push(currentlyFollowing[i].username);
            }

            for (let i = 0; i < searchedUsers.length; i++) {
                if (!currentlyFollowingUsernames.includes(searchedUsers[i].username)) {
                    searchedUsers[i].isFollowing = false;
                    searchedUsers[i].buttonText = <html>
                        <FontAwesomeIcon icon="plus" />
                        <span className="d-block d-sm-none"></span>
                        <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Follow</span></html>
                    searchedUsers[i].buttonClass = "follow_user_btn";
                }
                else {
                    searchedUsers[i].isFollowing = true;
                    searchedUsers[i].buttonText = <html>
                        <FontAwesomeIcon icon="check" />
                        <span className="d-block d-sm-none"></span>
                        <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Following</span></html>
                    searchedUsers[i].buttonClass = "follow_user_btn";
                    searchedUsers[i].buttonClass = "following_user_btn";
                }
            }
            //Matched Results
            matchResults = searchedUsers.map(match => (
                <div key={match.username} value={match.username} className="row searched_friend_rows">
                    <img
                        src={match.imageURL}
                        alt="Test new friend"
                        className="searched_friend_miniprofile_pic"
                    />
                    <h4 className="searched_friend_name_label">{match.username}</h4>
                    <Button
                        className={match.buttonClass}
                        value={match.username}
                        data-profileimgurl={match.imageURL}
                        onClick={(event) => {

                            if (match.isFollowing) {
                                return;
                            }

                            else {
                                match.isFollowing = true;
                                axios.post("/newFollow", {
                                    currentUserProfileImg: localStorage.imageURL,
                                    currentUser: localStorage.username,
                                    newUser: event.target.value,
                                    newUserProfileImg: event.target.dataset.profileimgurl
                                });
                                this.props.history.push("/SearchProfiles");
                            }

                        }
                        }
                    >
                        {match.buttonText}
                    </Button>
                </div>
            ))
        }
        else {
            matchResults = null;
        }

        return (
            <div>
                <NavBar />
                <Container>
                    <Row>
                        <Col md={12}>
                            <form className="search_form" onSubmit={handleSubmit(this.onSubmitFriendSearch)}>
                                <Row className="friend_searchbar_row">
                                    <Field
                                        name="searchedUsername"
                                        type="text"
                                        component="input"
                                        autoComplete="none"
                                        placeholder="Search by username"
                                        className="friend_searchbar"
                                    />
                                    <Button className="search_friends_btn"><span role="img" aria-label="search">🔎</span></Button>
                                </Row>
                            </form>
                            <div>
                                {matchResults}
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Card className="your_friends_card">
                                <CardTitle className="your_friends_card_title">Following</CardTitle>
                                <hr className="your_friends_hr" />
                                {/* {console.log(this.props.user)} */}
                                {this.props.user.following.map(friend => (
                                    <Row key={friend.username} value={friend.username} className="row your_friend_miniprofile_row">
                                        <img
                                            src={friend.imageURL}
                                            alt={friend.username}
                                            className="your_friend_miniprofile_pic"
                                        />

                                        <h4 className="your_friend_name_label">{friend.username}</h4>

                                        <Button className="followingButton">
                                            <FontAwesomeIcon icon="check" />
                                            <span className="d-block d-sm-none"></span>
                                            <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Following</span>
                                        </Button>

                                    </Row>
                                ))}
                            </Card>
                        </Col>

                        <Col md={6}>
                            <Card className="your_friends_card">
                                <CardTitle className="your_friends_card_title">Followers</CardTitle>
                                <hr className="your_friends_hr" />
                                {this.props.user.followers.map(friend => (
                                    <div key={friend.username} value={friend.username} className="row your_friend_miniprofile_row">
                                        <img
                                            src={friend.imageURL}
                                            alt={friend.username}
                                            className="your_friend_miniprofile_pic"
                                        />
                                        <h4 className="your_friend_name_label">{friend.username}</h4>
                                        {(currentlyFollowing.filter(currentFollowed => currentFollowed["username"] === friend.username).length === 1) ?
                                        <Button className="followingButton">
                                            <FontAwesomeIcon icon="check" />
                                            <span className="d-block d-sm-none"></span>
                                            <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Following</span>
                                        </Button>
                                        :
                                        <Button className="followButton">
                                            {/* {currentlyFollowing.filter(currentFollowed => currentFollowed["username"] === friend.username).length !== 1} */}
                                            <FontAwesomeIcon icon="plus" />
                                            <span className="d-block d-sm-none"></span>
                                            <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Follow</span>
                                        </Button>
    }
                                    </div>
                                ))}
                            </Card>
                        </Col>

                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user,
        searchedUsers: state.searchedUsers.searchedUsers,
        errorMessage: state.auth.errorMessage
    };
}

export default requireAuth(compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: "searchProfiles" })
)(SearchProfiles));
