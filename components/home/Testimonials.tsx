import React from 'react';
import Container from '../common/Container';
import Heading from '../common/heading/Heading';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const testimonials = [
        {
            id : 1,
            comment : "Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my “idea” into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can’t recommend them enough.",
            userName : "-Jessica kaur",
            userTitle : "Naina and Noor",
            userProfile : "/images/profileImg1.png"
        },
        {
            id : 2,
            comment : "Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my “idea” into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can’t recommend them enough.",
            userName : "-James Bond",
            userTitle : "Naina and Noor",
            userProfile : "/images/profileImg1.png"
        },
        {
            id : 3,
            comment : "Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my “idea” into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can’t recommend them enough.",
            userName : "-Alex Henry",
            userTitle : "Naina and Noor",
            userProfile : "/images/profileImg1.png"
        },
    ]
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

                {/* <div>
                    {
                        testimonials.map((testimonial) => <TestimonialCard key={testimonial.id}  />)
                    }
                </div> */}
            </Container>
        </div>
    );
};

export default Testimonials;