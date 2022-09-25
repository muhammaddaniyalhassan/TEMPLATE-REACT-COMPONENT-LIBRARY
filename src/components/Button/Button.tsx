import React from 'react';



/* Type Script Interface (This function defines a required prop called label that our button needs to recieve)*/
interface ButtonProps {
    label: string;
}

/*A functional component called button*/
const Button = (props: ButtonProps) => {
    return <button>{props.label}</button>
};

export default Button; 
