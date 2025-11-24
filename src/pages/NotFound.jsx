import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
           <p>NotFound 404 error</p>
            <Link to="/">return to home page</Link>
        </div>
    );
};

export default NotFound;