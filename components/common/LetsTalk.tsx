import React from 'react';
import Container from './Container';
import Image from 'next/image';
import Heading from './heading/Heading';
import Button from './button/Buttton';

const LetsTalk = () => {
    return (
        <div className='bg-[#F5E3E9] pt-12 lg:pt-0'>
            <Container>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-20 items-center'>
                    <div className='w-full lg:w-3/5'>
                        <Heading
                            title='Turn Your Website into a Cash Flow Machine'
                            custom='uppercase text-[35px] md:text-[55px] lg:text-[58px] font-bold leading-tight'
                        />
                        <p className='text-black mt-3'>Lets discuss your goals, challenges, and create a strategy that propels your business forward.
                            Do not miss out on this opportunity to take your digital presence to the next level. </p>

                        <div className='mt-10 lg:mt-16' >
                            <Button 
                                label="Let's talk"
                            />
                        </div>
                    </div>

                    <div className='w-full lg:w-2/5'>
                        <Image
                            src='/images/hansome-guy.png'
                            alt='Handsome guy'
                            width={400}
                            height={600}
                            className='w-full'
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default LetsTalk;