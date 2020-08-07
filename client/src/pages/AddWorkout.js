import React, { Component } from 'react';
// import API from "../utils/API";
import { Container, Row, Col } from "reactstrap";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import requireAuth from "../components/requireAuth";
import NewWorkout from "../components/SaveWorkout";


class Home extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <NewWorkout />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  };
};
export default requireAuth(Home);