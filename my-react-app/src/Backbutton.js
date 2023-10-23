import React from 'react';
import './Homes.css';
import { Link } from 'react-router-dom';

function BackButton() {
    const buttonStyle = {
        color: 'white',
        textDecoration: 'none', // Add this to remove underline from the link
    };

    return (
        <Link to="/" style={buttonStyle}>
            <button>Back</button>
        </Link>
    );
}

export default BackButton;
