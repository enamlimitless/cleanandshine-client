import React from 'react';
import './Header.css';
import Navbar from '../../../Shared/Navbar/Navbar';
import MainHeader from '../MainHeader/MainHeader';
import InfoCard from '../InfoCard/InfoCard';
import TopNavbar from '../../../Shared/TopNavbar/TopNavbar';

const Header = () => {
    return (
        <div className="header-main">
            <TopNavbar></TopNavbar>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            <InfoCard></InfoCard>
        </div>
    );
};

export default Header;