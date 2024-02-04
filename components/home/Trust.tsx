import React from 'react';
import Container from '../common/Container';
import Heading from '../common/heading/Heading';

const Trust = () => {
    return (
        <div className="bg-[url('/images/tech-bg.png')] h-[600px] bg-center flex justify-center items-center">
            <Container>
                <div className='max-w-[960px] mx-auto'>
                    <Heading
                        title="We use the tech that you trust most."
                        center
                        custom='text-[35px] md:text-[55px] lg:text-[96px] font-semibold leading-none'
                    />
                </div>
            </Container>
        </div>
    );
};

export default Trust;