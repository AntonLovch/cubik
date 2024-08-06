import React from 'react';

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
};

Button.defaultProps = {
    text: 'Кнопка'
};

export default Button;

