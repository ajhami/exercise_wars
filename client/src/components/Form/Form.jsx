import React from 'react';

const Form = props => {

  return (
    <form onSubmit={props.handleFormSubmit}>
      {props.children}
    </form>
  );
};

export default Form;