import React from 'react';
import './Button.css';

function Button ({title, onClick, variant}) {
  return (
    <button onClick={onClick} type='button' className={`btn ${variant}`}>
        {title}
    </button>
  );
}

export default Button;