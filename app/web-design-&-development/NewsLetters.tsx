import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import React from 'react';

const NewsLetters = () => {
    return (
        <div className='px-4 lg:px-10 py-8 md:py-12 rounded-lg border border-black flex  flex-col-reverse md:flex-row-reverse justify-between items-center gap-12 lg:gap-28'>
            <div className='w-full md:w-/12 text-end'>
                <Heading
                    title="Newsletters"
                    end
                    custom='uppercase text-[24px] md:text-[32px] lg:text-[36px] font-semibold leading-tight'
                />
                <p className='text-sm font-semibold mt-2' >
                    Newsletters possess the power to transform casual signups into loyal customers. However, the journey from a signup to a subscriber requires more than sporadic emails. We believe in nurturing the relationship, providing consistent value, education, and rapport that makes subscribers feel they are supporting a cause when purchasing. We aim to keep your audience engaged, informed, and eager to act.
                </p>
            </div>
            <div className='w-full md:w-/12'>
                <Image
                    src='/images/newsletters.png'
                    alt='Newsletters'
                    width={500}
                    height={300}
                />
            </div>
        </div>
    );
};

export default NewsLetters;