import Heading from '@/components/common/heading/Heading';
import React from 'react';
import WebDesign from './WebDesign';
import DigitalMarketing from './DigitalMarketing';
import Courses from './Courses';
import Ecommerce from './Ecommerce';

const DigitalSoluations = () => {
    return (
        <div className='pt-10'>
            <div className='max-w-[1000px] mx-auto text-center pb-8'>
                <Heading
                    title="Comprehensive Digital Solutions Tailored to Your Success"
                    center
                    custom='uppercase text-[35px] md:text-[55px] lg:text-[64px] font-semibold leading-tight'
                />
                <p className='mt-4 text-sm md:text-[15px] lg:text-[16px]'>
                    Choose from our services to meet your business requirements:
                </p>
            </div>

            <WebDesign />
            <DigitalMarketing />
            <Courses />
            <Ecommerce />
        </div>
    );
};

export default DigitalSoluations;