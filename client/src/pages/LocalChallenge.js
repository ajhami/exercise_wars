import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MinuteChallenge from '../components/MinuteChallenge';
import { Container, Row, Col } from "reactstrap";
// import API from "../utils/API";



class LocalChallenge extends Component {


  render() {
    return (
      <div>
        <NavBar />
        <Container className="mb-5">

          <Row>
            <Col md={4}>

            </Col>
            <Col md={4}>
              < MinuteChallenge />
            </Col>
            <Col md={4}>

            </Col>

          </Row>
        </Container>

        <Footer />

      </div>
    );
  };
};
export default LocalChallenge;
