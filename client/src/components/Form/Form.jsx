import React from 'react';

const Form = props => {

  return (
    <form 
    onSubmit={props.handleFormSubmit}
    id={props.idName}
    >
      {props.children}
    </form>
  );
};

export default Form;