import React from 'react';
import './Footer.css';
import FooterRight from '../FooterRight/FooterRight';
import FooterLeft from '../FooterLeft/FooterLeft';
import FooterRightMiddle from '../FooterRIghtMiddle/FooterRightMiddle';
import FooterLeftMiddle from '../FooterLeftMiddle/FooterLeftMiddle';
const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-3">
                        <FooterLeft></FooterLeft>
                    </div>
                    <div className="col-lg-3">
                        <FooterLeftMiddle></FooterLeftMiddle>
                    </div>
                    <div className="col-lg-3">
                        <FooterRightMiddle></FooterRightMiddle>
                    </div>
                    <div className="col-lg-3">
                        <FooterRight></FooterRight>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;