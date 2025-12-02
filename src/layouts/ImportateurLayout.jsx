import React from 'react';
import {Link, Outlet} from "react-router-dom";
import useAuthStore from "../stores/authStore.js";

const ImportateurLayout = () => {
    const {user, isLogged} = useAuthStore();
    return (
        <div>
            isLogged: {isLogged.toString()}
            <br/>
            user: {JSON.stringify(user)}
            <br/>
            <Link to="/admin">Admin page</Link>
            <br/>
            <Outlet/>
        </div>
    );
};

export default ImportateurLayout;