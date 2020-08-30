import React from 'react'
import './style.css'
import { Container, Row, Col } from "reactstrap";
function Footer() {
    return (
        <div style={{ backgroundColor: "#CED4DA" }}>
            <Container className="footer">
                <Row>
                    <img className="logoImage" src={process.env.PUBLIC_URL + "/assets/images/logo/exercise_wars_title.png"} alt="Card cap"
                    >
                    </img>
                </Row>
                <Row>
                    <Col md={6} style={{marginBottom: "15px"}}>
                        <div className="contactLabel">Contact us:</div><a className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" style={{ width: "100px", backgroundColor: "#343A40" }} href="mailto:info@exercisewars.com">Email</a>
                    </Col>
                    <Col md={6} style={{marginBottom: "15px"}}>
                    <div className="contactLabel">Donate to our selected cause: </div>
                    <a href="https://www.theroadhome.org/give/in-kind-donations/" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" style={{width: "100px", backgroundColor: "#343A40" }}>Donate</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer