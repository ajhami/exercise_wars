import React from 'react';

const FormSubmit = props => {

  return (
    <div className="FormSubmit">
      <button className="FormSubmit-button">{props.text}</button>
    </div>
  );
};

export default FormSubmit;