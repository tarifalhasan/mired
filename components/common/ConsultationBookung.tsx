import React from 'react';
import Container from './Container';
import Image from 'next/image';
import Heading from './heading/Heading';
import Button from './button/Buttton';

const ConsultationBookung = () => {
    return (
        <div className='py-20'>
            <Container>
                <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 items-center'>
                    <div className='w-full lg:w-2/5'>
                        <Image
                            src='/images/two-lady.png'
                            alt='Handsome guy'
                            width={400}
                            height={600}
                            className='w-full'
                        />
                    </div>

                    <div className='w-full lg:w-3/5'>
                        <Heading
                            title='Your Website Can Work  Harder For You'
                            custom='uppercase text-[35px] md:text-[55px] lg:text-[58px] font-bold leading-tight'
                        />
                        <p className='text-black mt-3'>
                            Imagine a website that not only beautifully showcases your brand, but also seamlessly integrates a diverse range of revenue-generating elements. <span className='font-bold'>At mired, we bring that vision to life.</span>
                                <br /> <br />
                            Our website building services incorporate revenue-generating elements such as engaging online courses, informative newsletters, and engaging blogs, as well as an e-commerce platform.
                            Your digital platform can - and should - work harder for you.
                        </p>

                        <div className='mt-10 lg:mt-16' >
                            <Button
                                label="Book Your Consultation Today"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ConsultationBookung;