import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import React from 'react';
import SocialMedia from './SocialMedia';
import ContentMarketing from './ContentMarketing';

const WeFocus = () => {
    return (
        <div className='pt-20 pb-10'>
            <Container>
                <div>
                    <div className='max-w-[650px]'>
                        <Heading
                            title="WE FOCUS ON SCALING YOUR BRAND'S PRESENCE SO YOU CAN FOCUS ON YOUR BUSINESS"
                            custom='uppercase text-[22px] md:text-[35px] lg:text-[40px] font-semibold leading-tight'
                        />
                    </div>

                    <div className='mt-12 lg:mt-16 flex flex-col gap-12'>
                        <SocialMedia />
                        <ContentMarketing />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WeFocus;