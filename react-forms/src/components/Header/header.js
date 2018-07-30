import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <header>
            <div>
                <Link to="/uncontrolled"> Uncontrolled </Link>
                <Link to="/controlled"> Controlled </Link>
                <Link to="/user"> User </Link>
            </div>
        </header>
    );
};

export default header;