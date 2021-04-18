import React from 'react';
import './About.css';
import about from '../../../images/cleanAbout.jpg';
import trophy from '../../../images/trophy.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const About = () => {

    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img className="img-fluid" src={about} alt="" />
                            <div className="experience">
                                <div className="d-flex align-items-center">
                                    <div className="trophy">
                                        <img className="img-fluid" src={trophy} alt="" />
                                    </div>
                                    <p><span>10+</span> Years <br /> Experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ms-5 ps-5">
                            <h4 className="sub-head">About Our Cleaning Agency</h4>
                            <h2 className="sec-head">You can believe on us <br /> to get a awesome services</h2>
                            <h5 className="sub-head">We are Clean & Shine, cleaning service provider.</h5>
                            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quae, accusantium eos dignissimos facilis ad Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, culpa?</p>
                            <button className="btn py-3 style-btn button">About Us <FontAwesomeIcon className="mt-2 ms-2" icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;