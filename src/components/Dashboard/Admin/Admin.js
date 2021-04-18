import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AddServices from '../AddService/AddService';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const Admin = () => {
    return (
        <div className="row">
            <Navbar></Navbar>
            <div className="col-lg-3 bg-dark">
                <AdminSidebar></AdminSidebar>
            </div>
            <div className="col-lg-9 bg-warning">
                <AddServices></AddServices>
            </div>
        </div>
    );
};

export default Admin;