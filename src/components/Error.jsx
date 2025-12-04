import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='err-page'>
            <h1>Oops !!!</h1>
            <h2>404 - Page Not Found</h2>
            <p>Something went wrong. The page you're looking for doesn't exist.</p>
            <Link to="/" className="back-home">Go Back Home</Link>
        </div>
    )
};

export default Error;