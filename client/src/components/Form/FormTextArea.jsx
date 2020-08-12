import React from 'react';
import { Label, Container, Row, Col } from "reactstrap"

const FormTextArea = props => {

  return (
    <div>
      <Container style={{ margin: "5px", }}>
        <Row >
        <Col sm>
          <Label htmlFor={props.id}>{props.label}</Label>
          </Col>
          <Col sm>
          <textarea
            className="form-control"
            style={{height: "75px"}}
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default FormTextArea;