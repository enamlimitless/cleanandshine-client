import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import AddService from '../AddService/AddService';

const Dashboard = () => {
    return (
        <div className="bg">
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12 sidebar-bg">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
                <AddService></AddService>
            </div>
            <div className="col-md-5 col-sm-12 col-12">
                
            </div>
        </div>
        </div>
    );
};

export default Dashboard;