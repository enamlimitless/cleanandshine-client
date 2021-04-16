import React from 'react';
import growing from '../../../images/growing.png';
import large from '../../../images/large.png';
import PricingDetail from '../PricingDetail/PricingDetail';
const Pricing = () => {

    const pricingData = [
        {
            title: 'Small Business',
            employee: '5-10 Employees',
            price: '$99',
            description: 'Plus One-Time Bambee In-Depth HR Audit For:',
            discount: '$100',
            icon: growing
        },
        {
            title: 'Growing Business',
            employee: '15-20 Employees',
            price: '$199',
            choice: 'Best Choice',
            description: 'Plus One-Time Bambee In-Depth HR Audit For:',
            discount: '$100',
            icon: growing
        },
        {
            title: 'Large Business',
            employee: 'Unlimited Employees',
            price: '$299',
            description: 'Plus One-Time Bambee In-Depth HR Audit For:',
            discount: '$100',
            icon: large
        }
    ]
    return (
        <section>
            <div className="container">
                <div className="row text-center">
                    <h4 className="sub-head">Pricing Plan</h4>
                    <h2 className="sec-head">We are offering the best</h2>
                    <h3 className="sec-head">pricing to help you!</h3>
                    <p className="description my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Id a quos fuga aspernatur perferendis deleniti <br/> exercitationem, earum alias odit. Eos?</p>
                </div>
                <div className="row">
                    {
                        pricingData.map(price => <PricingDetail price={price}></PricingDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Pricing;