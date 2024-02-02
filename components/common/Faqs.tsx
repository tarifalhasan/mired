import React from 'react';
import Container from './Container';
import Heading from './heading/Heading';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faqs = () => {
    return (
        <div className='py-20'>
            <Container>
                <div>
                    <Heading
                        title='Frequently Asked Questions'
                        center
                        custom='uppercase text-[35px] md:text-[55px] lg:text-[58px] font-bold leading-tight'
                    />

                    <div >
                        <Accordion type="single" collapsible className="w-full flex flex-col gap-6 mt-12 lg:mt-20">
                            <AccordionItem value="item-1" className='px-3 md:px-5 lg:px-10 border-[1px] border-[#CFC9D4]'>
                                <AccordionTrigger className='hover:no-underline text-md md:text-lg lg:text-[22px] font-medium text-start'>
                                    Can you help with content creation for my website?
                                </AccordionTrigger>
                                <AccordionContent className='text-sm lg:text-[16px] leading-7 pr-10 lg:pr-16'>
                                    Yes! Our team includes talented content creators who can assist you in developing engaging and optimized content for your website. From copywriting to blog writing, we provide comprehensive content creation services.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className='px-3 md:px-5 lg:px-10 border-[1px] border-[#CFC9D4]'>
                                <AccordionTrigger className='hover:no-underline text-md md:text-lg lg:text-[22px] font-medium text-start'>
                                    Can you integrate e-commerce functionality into my website?
                                </AccordionTrigger>
                                <AccordionContent className='text-sm lg:text-[16px] leading-7 pr-10 lg:pr-16'>
                                    Yes! Our team includes talented content creators who can assist you in developing engaging and optimized content for your website. From copywriting to blog writing, we provide comprehensive content creation services.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className='px-3 md:px-5 lg:px-10 border-[1px] border-[#CFC9D4]'>
                                <AccordionTrigger className='hover:no-underline text-md md:text-lg lg:text-[22px] font-medium text-start'>
                                    How long does it take to build a website?
                                </AccordionTrigger>
                                <AccordionContent className='text-sm lg:text-[16px] leading-7 pr-10 lg:pr-16'>
                                    Yes! Our team includes talented content creators who can assist you in developing engaging and optimized content for your website. From copywriting to blog writing, we provide comprehensive content creation services.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className='px-3 md:px-5 lg:px-10 border-[1px] border-[#CFC9D4]'>
                                <AccordionTrigger className='hover:no-underline text-md md:text-lg lg:text-[22px] font-medium text-start'>
                                    Can you update and maintain my website after it is launched?
                                </AccordionTrigger>
                                <AccordionContent className='text-sm lg:text-[16px] leading-7 pr-10 lg:pr-16'>
                                    Yes! Our team includes talented content creators who can assist you in developing engaging and optimized content for your website. From copywriting to blog writing, we provide comprehensive content creation services.
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Faqs;