import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import React from 'react';

const ContentMarketing = () => {
    return (
        <div className='px-4 lg:px-10 py-8 md:py-12 rounded-lg border border-black flex  flex-col-reverse md:flex-row-reverse justify-between items-center gap-12 lg:gap-28'>
            <div className='w-full md:w-/12 text-end'>
                <Heading
                    title="CONTENT MARKETING"
                    end
                    custom='uppercase text-[24px] md:text-[32px] lg:text-[36px] font-semibold leading-tight'
                />
                <p className='text-sm font-semibold mt-2' >
                Organic traffic, paid ads, eBooks, blogs, newsletters, videos, we do it all. We tell your brands story through compelling content that engages others and entices them to take action. It is not just about being seen; it is about being remembered and we’re the right people to make that happen.

                </p>
            </div>
            <div className='w-full md:w-/12'>
                <Image
                    src='/images/analytics.png'
                    alt='Social media'
                    width={500}
                    height={300}
                />
            </div>
        </div>
    );
};

export default ContentMarketing;