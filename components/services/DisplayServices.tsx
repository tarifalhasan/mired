import React from 'react';
import ServiceCard from './ServiceCard';
import Container from '../common/Container';

const DisplayServices = () => {
    return (
        <Container>
            <div className='mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <ServiceCard
                    title="Web Design and Development"
                    description="Your website is the face of your business in the digital world, and we're here to make it unforgettable..."
                    icon='/images/design-icon.png'
                    link='/web-design-&-development'
                />
                <ServiceCard
                    title="Brand Development & Digital Marketing"
                    description="Your brand is your unique story, and we're here to help you tell it. Our brand development and digital marketing experts work closely..."
                    icon='/images/marketing.png'
                    link='/digital-marketing'
                />
                <ServiceCard
                    title="Courses and Newsletters"
                    description="Share your expertise and create valuable learning experiences with our customized course development services..."
                    icon='/images/course-icon.png'
                />
                <ServiceCard
                    title="E-commerce Solutions"
                    description="Seamlessly sell your products or services online with our tailored ecommerce solutions. We create user-friendly online stores that offer..."
                    icon='/images/cart.png'
                />
            </div>
        </Container>
    );
};

export default DisplayServices;