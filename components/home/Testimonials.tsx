import React from 'react';
import Container from '../common/Container';
import Heading from '../common/heading/Heading';
import TestimonialCard from './TextimonialCard';

const Testimonials = () => {
    
    return (
        <div className='my-16'>
            <Container>
                <div className='mb-12'>
                    <Heading
                        title="What Our Clients Say"
                        center
                        custom='uppercase text-[35px] md:text-[43px] lg:text-[64px] font-semibold leading-none'
                    />
                    <p className='text-center mt-2'>Testimonials that speak volumes</p>
                </div>

                <div>
                    <TestimonialCard />
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;