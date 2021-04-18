import React, { useEffect, useState } from 'react';
// import person1 from '../../../images/person1.jpg';
import TestimonialDetail from '../TestimonialData/TestimonialDetail';
const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() =>{
        const url = 'https://quiet-taiga-29943.herokuapp.com/testimonial'
        fetch(url)
        .then(res => res.json())
        .then(data => setTestimonial(data))
    },[])
    console.log(testimonial)
    // const testimonialData = [
    //     {
    //         blockquote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem molestias odio eum soluta excepturi doloribus.,',
    //         img: person1,
    //         name: 'Kodom',
    //         role: 'Founder Of Komdom Inc Limited'
    //     },
    //     {
    //         blockquote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem molestias odio eum soluta excepturi doloribus.,',
    //         img: person1,
    //         name: 'Abul',
    //         role: 'Founder Of Komdom Inc Limited'
    //     },
    //     {
    //         blockquote: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem molestias odio eum soluta excepturi doloribus.,',
    //         img: person1,
    //         name: 'Kabul',
    //         role: 'Founder Of Komdom Inc Limited'
    //     }
    // ]
    return (
        <section className="bg-light">
            <div className="container">
                <div className="row">
                    <h3 className="sub-head">Client’s Testimonials</h3>
                    <h1 className="sec-head">We are very happy for client’s reviews.</h1>
                </div>
                <div className="row mt-5">
                    {
                        testimonial.map(testimonial => <TestimonialDetail testimonial={testimonial}></TestimonialDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;