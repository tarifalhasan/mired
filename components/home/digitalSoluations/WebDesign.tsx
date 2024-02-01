import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const WebDesign = () => {
    return (
        <div className='bg-[#F5E3E9] py-10 border-y-[2px] border-black/30'>
            <Container>
                <div className='flex flex-col-reverse lg:flex-row gap-8 items-center'>
                    <div className='w-full lg:w-2/3'>
                        <Heading
                            title="Web Design and Development"
                            custom='uppercase text-[20px] md:text-[30px] lg:text-[38px] font-semibold leading-tight'
                        />
                        <p className='mt-3 mb-5 text-sm md:text-[15px] lg:text-[16px] leading-7'>
                            Your website is the face of your business in the digital world, and we are here to make it unforgettable. Our web design and development team combines stunning visuals with seamless functionality to create a custom online presence that captivates your audience. From intuitive navigation, to pixel-perfect designs, we build websites that leave a lasting impression and drive meaningful engagement.
                        </p>
                        <Link href='' className='flex  items-center font-semibold text-black'>
                            <p className='uppercase font-clash text-sm '>Learn more</p>
                            <IoIosArrowRoundForward size={28} />
                        </Link>
                    </div>

                    <div className='w-full lg:w-1/3 flex justify-center lg:justify-end'>
                        <Image
                            src='/images/web.png'
                            alt='Web design & Development'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WebDesign;