import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import React from 'react';
import SocialMedia from './SocialMedia';
import NewsLetters from './NewsLetters';
import Website from './Website';
import EcommerceSolutions from './EcommerceSolutions';

const WeFocusOfWeb = () => {
    return (
        <div className='pt-20 pb-20'>
            <Container>
                <div>
                    <div className='max-w-[650px]'>
                        <Heading
                            title="We focus on making money so you don’t have to"
                            custom='uppercase text-[22px] md:text-[35px] lg:text-[40px] font-semibold leading-tight'
                        />
                        <p className='mt-3'>
                            We make the monetization strategy and stand by your side to manage it.
                        </p>
                    </div>

                    <div className='mt-12 lg:mt-16 flex flex-col gap-12'>
                        <SocialMedia />
                        <NewsLetters />
                        <Website />
                        <EcommerceSolutions />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WeFocusOfWeb;