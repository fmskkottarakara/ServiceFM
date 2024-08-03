import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];
//In React, children is a special prop that refers to the nested elements inside a component. 
const Button = ({ children, type, onClick, buttonStyle, buttonSize }) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes( buttonSize ) ? buttonSize : SIZES[0];

    return(
        <Link to='/sign-up' className='bin-mobile'>
            <button
            className={`bin ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export default Button;