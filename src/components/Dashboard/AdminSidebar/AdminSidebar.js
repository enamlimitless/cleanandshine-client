import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
    return (
        <div className="py-5 px-4" style={{ height: "100vh" }}>
            <div>
                <Link to="/" className="text-white h3"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default AdminSidebar;