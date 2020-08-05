import React from 'react';

const FormInput = props => {

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input 
        id={props.id} 
        type={props.type} 
        value={props.value} 
        onChange={props.onChange} 
      />
    </div>
  );
};

export default FormInput;