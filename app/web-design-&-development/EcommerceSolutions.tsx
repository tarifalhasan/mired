import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import React from 'react';

const EcommerceSolutions = () => {
    return (
        <div className='px-4 lg:px-10 py-8 md:py-12 rounded-lg border border-black flex  flex-col-reverse md:flex-row-reverse justify-between items-center gap-12 lg:gap-28'>
            <div className='w-full md:w-/12 text-end'>
                <Heading
                    title="E-COMMERCE SOLUTIONS"
                    end
                    custom='uppercase text-[24px] md:text-[32px] lg:text-[36px] font-semibold leading-tight'
                />
                <p className='text-sm font-semibold mt-2' >
                    E-commerce is not just about having products available; it is about optimizing the journey from the first click to the final purchase. We specialize in enhancing conversion rates, optimizing click-through rates from social promotions, and more. Our expertise spans across leading platforms like Shopify, WooCommerce, and Wix, ensuring a seamless and profitable online shopping experience for your customers.
                </p>
            </div>
            <div className='w-full md:w-/12'>
                <Image
                    src='/images/ecom-solutions.png'
                    alt='Newsletters'
                    width={500}
                    height={300}
                />
            </div>
        </div>
    );
};

export default EcommerceSolutions;