import React from 'react';
import { Label, Input, Container, Row, Col } from "reactstrap"
import OptionsList from "./OptionsList"

const SelectInput = props => {

  return (


    <div>
      <Container>
        <Row>
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
            >
              <OptionsList/>
              </Input>
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default SelectInput;