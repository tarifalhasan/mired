import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const DigitalMarketing = () => {
    return (
        <div className='bg-[#F5E3E9] py-10 border-b-[2px] border-black/30'>
            <Container>
                <div className='flex flex-col-reverse lg:flex-row-reverse gap-8 items-center'>
                    <div className='w-full lg:w-2/3'>
                        <Heading
                            title="Brand Development & Digital Marketing"
                            custom='uppercase text-[20px] md:text-[30px] lg:text-[38px] font-semibold leading-tight'
                        />
                        <p className='mt-3 mb-5 text-sm md:text-[15px] lg:text-[16px] leading-7'>
                            Your brand is your unique story, and we are going to help you tell it. Our brand development and digital marketing experts work directly with you to define your brands identity, personality, and voice. We craft tailored digital marketing strategies that cut through the noise, harnessing the power of SEO, social media, content marketing, and more to amplify your brands reach and engage your target audience.
                        </p>
                        <Link href='' className='flex  items-center font-semibold text-black'>
                            <p className='uppercase font-clash text-sm '>Learn more</p>
                            <IoIosArrowRoundForward size={28} />
                        </Link>
                    </div>

                    <div className='w-full lg:w-1/3 flex justify-center lg:justify-start'>
                        <Image
                            src='/images/digital-marketing.png'
                            alt='Digital Marketing'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DigitalMarketing;