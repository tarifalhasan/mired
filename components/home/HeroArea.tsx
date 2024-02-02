import React from 'react';
import Container from '../common/Container';
import Heading from '../common/heading/Heading';
import Button from '../common/button/Buttton';

const HeroArea = () => {
    return (
        <div className="bg-[url('/images/home-hero-bg.png')] bg-cover py-32">
            <Container>
                <div className='max-w-[1000px] mx-auto text-center'>
                    <Heading
                        title="Ready to Turn Your Website into a Revenue Powerhouse?"
                        center
                        custom='uppercase text-[35px] md:text-[55px] lg:text-[68px] font-semibold leading-tight'
                    />
                    <p className='mt-3 mb-6 text-sm md:text-[15px] lg:text-[16px] px-0 lg:px-20 leading-7'>
                        We do not just build websites. We turn your digital presence into a revenue magnet by incorporating profit-driven features such as courses, newsletters, and paid subscriptions and strategically market to maximize your reach.
                    </p>
                    <Button
                        label='Book Your Consultation Today'
                    />
                </div>
            </Container>

        </div>
    );
};

export default HeroArea;