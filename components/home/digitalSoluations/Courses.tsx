import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const Courses = () => {
    return (
        <div className='bg-[#F5E3E9] py-10 border-b-[2px] border-black/30'>
            <Container>
                <div className='flex flex-col-reverse lg:flex-row gap-8 lg:gap-0 items-center'>
                    <div className='w-full lg:w-2/3'>
                        <Heading
                            title="Courses and Newsletters"
                            custom='uppercase text-[20px] md:text-[30px] lg:text-[38px] font-semibold leading-tight'
                        />
                        <p className='mt-3 mb-5 text-sm md:text-[15px] lg:text-[16px] leading-7'>
                        Share your expertise and create valuable learning experiences with our customized course development services. We collaborate with you to design and develop interactive online courses that empower your audience and generate revenue. Additionally, our skilled content creators craft engaging newsletters that inform, inspire, and build lasting connections with your subscribers.
                        </p>
                        <Link href='' className='flex  items-center font-semibold text-black'>
                            <p className='uppercase font-clash text-sm '>Learn more</p>
                            <IoIosArrowRoundForward size={28} />
                        </Link>
                    </div>

                    <div className='w-full lg:w-1/3 flex justify-center lg:justify-end'>
                        <Image
                            src='/images/courses.png'
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

export default Courses;