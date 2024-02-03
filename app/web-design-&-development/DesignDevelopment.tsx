import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import React from 'react';


const montserrat = Montserrat({subsets: ["latin"]})

const DesignDevelopment = () => {
    return (
        <div className={`${montserrat.className} py-16`}>
            <Container>
                <div className='flex flex-col lg:flex-row gap-10 justify-between'>
                    <div className='border-2 border-black rounded-[20px] pt-8 md:pt-14 pb-6 px-4 md:px-8'>
                        <Image
                            src='/images/design.png'
                            alt='Web Design'
                            width={400}
                            height={350}
                            className='w-full mb-16'
                        />
                        <Heading
                            title="Design"
                            custom='uppercase text-[26px] md:text-[32px] lg:text-[36px] font-semibold leading-tight'
                        />
                        <p className='text-lg md:text-xl mt-2' >
                            Web design combines artistry with technical precision, and using tools like Figma, we craft designs aligned with your organizations goals.
                        </p>
                    </div>

                    <div className='border-2 border-black rounded-[20px] pt-8 md:pt-14 pb-6 px-4 md:px-8'>
                        <Image
                            src='/images/development.png'
                            alt='Web Design'
                            width={400}
                            height={350}
                            className='w-full mb-16'
                        />
                        <Heading
                            title="Development"
                            custom='uppercase text-[26px] md:text-[36px] lg:text-[36px] font-semibold leading-tight'
                        />
                        <p className='text-lg md:text-xl mt-2' >
                            We develop using custom code and leverage next-generation frameworks for efficiency and unparalleled performance.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default DesignDevelopment;