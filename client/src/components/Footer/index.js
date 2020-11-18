import React from 'react'
import './style.css'
import { Container, Row, Col } from "reactstrap";
function Footer() {
    return (
        <div style={{ backgroundColor: "#CED4DA" }}>
            <Container className="footer" >

                <Row>
                    <img className="logoImage" src={process.env.PUBLIC_URL + "/assets/images/logo/exercise_wars_title.png"} alt="Card cap"
                    >
                    </img>
                </Row>
                <Row>
                    <Col>
                        <div className="contactLabel"><a href="mailto:info@exercisewars.com">Contact us</a></div>
                        </Col>
                </Row>
                <Row>
                    <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=xa9hsUQ4db6shEL68tt4sm9jOmufZ3IVMrH4OiXgJ3aziz0cMd0H20w2wVyW"></script></span>

                </Row>
            </Container>
        </div>
    )
}

export default Footer