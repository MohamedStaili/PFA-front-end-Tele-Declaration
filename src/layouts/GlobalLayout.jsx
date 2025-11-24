import React from 'react';
import ThemeToggle from "../components/ThemeToggle.jsx";
import {Outlet} from "react-router-dom";

const GlobalLayout = () => {
    return (
        <div>
            <ThemeToggle/>
            <Outlet/>
        </div>
    );
};

export default GlobalLayout;