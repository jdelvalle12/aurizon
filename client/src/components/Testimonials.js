import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';
import '../App.css';

const Testimonial = () => {
    // Define your testimonial data and settings here
    const testimonialData = [
        {
            company: 'Company A',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum...',
            name: 'John Doe',
        },
        {
            company: 'Company B',
            content: 'In eget est a dui lacinia laoreet eu et elit. Donec nec facilisis...',
            name: 'Jane Smith',
        },
        // Add more testimonial objects as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings}>
            {testimonialData.map((testimonial, index) => (
                <div key={index}>
                    <h3>{testimonial.company}</h3>
                    <p>{testimonial.content}</p>
                    <p>- {testimonial.name}</p>
                </div>
            ))}
        </Slider>
    );
};

export default Testimonial;