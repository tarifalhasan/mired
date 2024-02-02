import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import Link from 'next/link';
import React from 'react';

const ServicesHeroArea = () => {
    return (
        <div className="bg-[url('/images/services-hero.png')] max-h-[460px] bg-cover py-32">
            <Container>
                <div>
                    <div className='max-w-[1030px] mx-auto text-center'>
                        <Heading
                            title="services"
                            center
                            custom='uppercase text-[35px] md:text-[55px] lg:text-[68px] font-semibold leading-tight'
                        />
                        <p className='mt-3 mb-6 text-sm md:text-[15px] lg:text-[16px] px-0 lg:px-20 leading-7'>
                        We optimize your online presence, turning it into a revenue powerhouse that effectively markets and sells your digital offerings. With our all-in-one solutions your website does more than exist—it excels.
                        </p>
                        <div className='flex gap-6 justify-center items-center'>
                            <Link href='/'>
                                <button className='uppercase text-white font-semibold border border-[#420FB0] bg-[#420FB0] px-7 py-3'> Home</button>
                            </Link>
                            <Link href='/services'>
                                <button className='uppercase text-black font-semibold bg-white border border-[#420FB0] px-7 py-3'> Services</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default ServicesHeroArea;