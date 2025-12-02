import React from 'react';
import {Outlet} from "react-router-dom";
import useAuthStore from "../stores/authStore.js";

const AdminLayout = () => {
    const {user, isLogged}= useAuthStore();
    return (
        <div>
            isLogged: {isLogged.toString()}
            <br/>
            user: {JSON.stringify(user)}
            <Outlet/>
        </div>
    );
};

export default AdminLayout;