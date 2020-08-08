import React from 'react';
import {Button} from "reactstrap"

const FormSubmit = props => {

  return (
    <div className="FormSubmit">
      <Button className="FormSubmit-button" style={{ margin: "5px", }}>{props.text}</Button>
    </div>
  );
};

export default FormSubmit;