import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const Ecommerce = () => {
    return (
        <div className='bg-[#F5E3E9] py-10 border-b-[2px] border-black/30'>
            <Container>
                <div className='flex flex-col-reverse lg:flex-row-reverse gap-8 items-center'>
                    <div className='w-full lg:w-2/3'>
                        <Heading
                            title="E-commerce Solutions"
                            custom='uppercase text-[20px] md:text-[30px] lg:text-[38px] font-semibold leading-tight'
                        />
                        <p className='mt-3 mb-5 text-sm md:text-[15px] lg:text-[16px] leading-7'>
                            Seamlessly sell your products or services online with our tailored e-commerce solutions. We create user-friendly online stores that offer a smooth shopping experience. From secure payment gateways to inventory management, we optimize your ecommerce platform to maximize conversions and generate revenue.
                        </p>
                        <Link href='' className='flex  items-center font-semibold text-black'>
                            <p className='uppercase font-clash text-sm '>Learn more</p>
                            <IoIosArrowRoundForward size={28} />
                        </Link>
                    </div>

                    <div className='w-full lg:w-1/3 flex justify-center lg:justify-start'>
                        <Image
                            src='/images/ecommerce.png'
                            alt='E-commerce solutions'
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Ecommerce;