import React from 'react';
import ServicesDetail from '../ServicesDetail.js/ServicesDetail';
import house from '../../../images/house.png';
import indoorclean from '../../../images/indoorclean.png';
import plumbing from '../../../images/plumbing.png';

const Services = () => {
    const servicesData = [
        {
            title: 'House Cleaning',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam expedita dolorem ipsum nemo illo totam.',
            icon: house
        },
        {
            title: 'Indoor Cleaning',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam expedita dolorem ipsum nemo illo totam.',
            icon: indoorclean
        },
        {
            title: 'Plumbing Services',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam expedita dolorem ipsum nemo illo totam.',
            icon: plumbing
        }
    ]
    return (
        <section className="bg-light">
            <div className="container">
                <div className="row text-center">
                    <h3 className="sub-head">Our Services</h3>
                    <h1 className="sec-head my-3">Best cleaning service in town</h1>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ratione impedit fugiat. <br/> Impedit animi ab, voluptatum hic vel temporibus aperiam.</p>
                </div>
                <div className="row">
                    {
                        servicesData.map(service => <ServicesDetail service={service}></ServicesDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;