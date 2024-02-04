import Container from '@/components/common/Container';
import Button from '@/components/common/button/Buttton';
import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MarketingHeroArea = () => {
    return (
        <div className='border-b-[3px] border-black pt-20 pb-8'>
            <Container>
                <div className='max-w-[1000px] mx-auto text-center'>
                    <div className='flex justify-center'>
                        <Link href='/services'>
                            <button className='uppercase rounded-xl text-black font-semibold bg-white border border-[#420FB0] px-7 py-3'>
                                Services
                            </button>
                        </Link>
                    </div>
                    <Heading
                        title="Brand Development & Digital Marketing"
                        center
                        custom='mb-12 mt-2 uppercase text-[28px] md:text-[55px] lg:text-[68px] font-semibold leading-tight'
                    />
                    <Button
                        label='contact us'

                    />

                    <Image
                        src="/images/step-of-dm.png"
                        alt='Step of digital marketing'
                        width={1000}
                        height={300}
                        className='mt-8'
                    />
                </div>
            </Container>

        </div>
    );
};

export default MarketingHeroArea;