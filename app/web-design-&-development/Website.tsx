import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import React from 'react';

const Website = () => {
    return (
        <div className='px-4 lg:px-10 py-8 md:py-12 rounded-lg border border-black flex  flex-col-reverse md:flex-row justify-between items-center gap-12 lg:gap-28'>
            <div className='w-full md:w-/12'>
                <Heading
                    title="Website"
                    custom='uppercase text-[24px] md:text-[32px] lg:text-[36px] font-semibold leading-tight'
                />
                <p className='text-xs font-semibold mt-2' >
                    It’s no surprise, but your website should serve as a hub for your audience to access valuable resources, products, or services. We offer specialized solutions like custom course creation and integrations. Whether it is integrating merch exchanges or other innovative strategies, we ensure your website is not just a digital placeholder but a dynamic platform driving growth and revenue.
                </p>
            </div>
            <div className='w-full md:w-/12'>
                <Image
                    src='/images/website.png'
                    alt='Social media'
                    width={500}
                    height={300}
                    className='w-full'
                />
            </div>
        </div>
    );
};

export default Website;