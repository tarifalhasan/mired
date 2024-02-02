import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import React from 'react';

const EnsureYourBrand = () => {
    return (
        <div className='my-16'>
            <Container>
                <div className='py-10 px-4 md:px-7 border-2 border-black'>
                    <Heading
                        title="how we ensure your brand stands out"
                        center
                        custom='mb-12 uppercase text-[22px] md:text-[27px] lg:text-[38px] font-semibold leading-tight'
                    />

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
                        <div>
                            <h5 className='text-[15px] font-bold text-[#F7BE08]'>DISCOVER</h5>
                            <Heading
                                title="brand analysis"
                                custom='w-[35%] uppercase text-[28px] md:text-[29px] lg:text-[32px] font-semibold leading-tight'
                            />
                            <p className='text-xl'>
                                We start by getting to the heart of your brand. What is your story? Who needs to hear it? Through analytics and market insights, we explore the landscape to locate where your brand can stand out.
                            </p>
                        </div>
                        <div>
                            <h5 className='text-[15px] font-bold text-[#92C2EB]'>DEFINE</h5>
                            <Heading
                                title="Brand Identity Creation"
                                custom='w-full md:w-[60%] uppercase text-[28px] md:text-[29px] lg:text-[32px] font-semibold leading-tight'
                            />
                            <p className='text-xl'>
                                Your brands identity is its signature. We work with you to create a distinct brand identity that resonates with your values and appeals to your audience, ensuring consistency across all platforms.
                            </p>
                        </div>
                        <div>
                            <h5 className='text-[15px] font-bold text-[#FF92B2]'>DEVELOP</h5>
                            <Heading
                                title="Digital Marketing Strategy"
                                custom='w-full md:w-[70%] uppercase text-[28px] md:text-[29px] lg:text-[32px] font-semibold leading-tight'
                            />
                            <p className='text-xl'>
                                Effective marketing does not shout; it engages. We develop a strategy that speaks to your audience where they are, using SEO, targeted social media campaigns, and content that tells your brands story.
                            </p>
                        </div>
                        <div>
                            <h5 className='text-[15px] font-bold text-[#92C2EB]'>DEPLOY</h5>
                            <Heading
                                title="engagement & conversion"
                                custom='w-full md:w-[50%] uppercase text-[28px] md:text-[29px] lg:text-[32px] font-semibold leading-tight'
                            />
                            <p className='text-xl'>
                                Turning strategy into action, we roll out marketing campaigns designed to engage and convert. We monitor, analyze, and adjust to make sure your brand does not just speak, it is heard.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default EnsureYourBrand;