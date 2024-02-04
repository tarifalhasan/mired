import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import React from 'react';

const SocialMedia = () => {
    return (
        <div>
            <div className='px-4 lg:px-10 py-8 md:py-12 rounded-lg border border-black flex  flex-col-reverse md:flex-row justify-between items-center gap-12 lg:gap-28'>
                <div className='w-full md:w-/12'>
                    <Heading
                        title="Social media"
                        custom='uppercase text-[24px] md:text-[32px] lg:text-[36px] font-semibold leading-tight'
                    />
                    <p className='text-xs font-semibold mt-2' >
                        A brands social media acts as its face to the world, so it is essential to present transparent and trustworthy value. At the heart of our strategy is a consistent schedule, clear objectives, and a concrete plan. From producing YouTube content and securing sponsors to other innovative monetization methods, we ensure your social platforms are not just about engagement, but also revenue generation.
                    </p>
                </div>
                <div className='w-full md:w-/12'>
                    <Image
                        src='/images/text-graph.png'
                        alt='Social media'
                        width={500}
                        height={300}
                    />
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;