import React from 'react';
import { Label, Input } from "reactstrap"

const FormTime = props => {
    return (
        <span>
            <Label htmlFor={props.id}>{props.label}</Label>
            <Input
                id={props.id}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </span>
    );
};

export default FormTime;