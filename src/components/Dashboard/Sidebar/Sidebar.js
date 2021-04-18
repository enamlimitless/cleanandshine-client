import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faPlus, faGripHorizontal, faUser, faCogs } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/orderList" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order List</span>
                    </Link>
                </li>
                <li className="py-5">
                    <Link to="/addServices" className="text-white">
                        <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                    </Link>
                </li>
                 <div>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li className="py-5">
                        <Link to="/manageServices" className="text-white">
                            <FontAwesomeIcon icon={faCogs} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;