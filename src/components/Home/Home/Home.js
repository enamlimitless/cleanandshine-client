import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import About from '../About/About';
import FooterBottom from '../FooterBottom/FooterBottom';
import Header from '../Header/Header/Header';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Pricing></Pricing>
            <Testimonial></Testimonial>
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Home;