import React from 'react';
import { Label, Input, Container, Row, Col } from "reactstrap"

const FormInput = props => {

  return (
    <div>
      <Container style={{ margin: "5px", }}>
        <Row >
        <Col sm>
          <Label htmlFor={props.id}>{props.label}</Label>
          </Col>
          <Col sm>
          <Input
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

export default FormInput;