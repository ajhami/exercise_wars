import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import {
    Card,
    CardTitle
} from "reactstrap";
import * as actions from "../../actions";
import "./style.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import requireAuth from "../../components/requireAuth";

class SearchProfiles extends Component {

    componentDidMount = () => {
        this.props.getProfileData();
    }

    onSubmitFriendSearch = (formProps) => {
        this.props.searchUsers(formProps);
    }


    render() {

        const { handleSubmit } = this.props;


        let hasSearchResults = this.props.searchedUsers || false;
        let matchResults;

        if(hasSearchResults.length === 0) {
            matchResults = (
                <div className="noresults_div">
                    <h3 className="noresults_text">No results found.</h3>
                </div>
            )
        }
        else if(hasSearchResults[0].username === "") {
            matchResults = null;
        }
        else if (hasSearchResults) {
            matchResults = this.props.searchedUsers.map(match => (
                <div key={match.username} value={match.username} className="row searched_friend_rows">
                    <img
                        src={match.imageURL}
                        alt="Test new friend"
                        className="searched_friend_miniprofile_pic"
                    />
                    <h4 className="searched_friend_name_label">{match.username}</h4>
                    <button className="follow_user_btn" value={match.username}>Follow</button>
                </div>
            ))
        }
        else {
            matchResults = null;
        }


        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 your_friends_col">
                            <Card className="your_friends_card">
                                <CardTitle className="your_friends_card_title">Your Friends</CardTitle>
                                <hr className="your_friends_hr" />

                                {this.props.user.following.map(friend => (
                                    <div key={friend.username} value={friend.username} className="row your_friend_miniprofile_row">
                                        <img
                                            src={friend.imageURL}
                                            alt={friend.username}
                                            className="your_friend_miniprofile_pic"
                                        />
                                        <h4 className="your_friend_name_label">{friend.username}</h4>
                                    </div>
                                ))}
                            </Card>

                        </div>
                        <div className="col-md-8">
                            <div className="row mt-3">
                                <div className="col-12">
                                    <h2 className="find_friends_title">Find Friends</h2>
                                    <form className="search_form" onSubmit={handleSubmit(this.onSubmitFriendSearch)}>
                                        <div className="row">
                                            <div className="friend_searchbar_row">
                                                <Field
                                                    name="searchedUsername"
                                                    type="text"
                                                    component="input"
                                                    autoComplete="none"
                                                    placeholder="Search by username"
                                                    className="friend_searchbar"
                                                />
                                                <button className="search_friends_btn"><span role="img" aria-label="search">🔎</span></button>
                                            </div>
                                        </div>

                                    </form>

                                    <div>{matchResults}</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
