import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";

const TestimonialCard = () => {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <div className='flex flex-col md:flex-row items-center gap-10 md:gap-6'>
                            <div className='w-full md:w-[40%]'>
                                <Image
                                    src="/images/profileImg1.png"
                                    alt='Profile image'
                                    width={400}
                                    height={300}
                                    className=''
                                />
                            </div>
                            <div className='w-full md:w-[60%]'>
                                <Image
                                    src="/images/qoutes-icon.png"
                                    alt='Qoutes Icon'
                                    width={40}
                                    height={40}
                                    className=''
                                />
                                <p className=' text-[17px] lg:text-[24px] mt-6'>
                                    Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my “idea” into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can’t recommend them enough.
                                </p>

                                <div className='mt-8 flex justify-between items-center'>
                                    <div>
                                        <h4 className='uppercase text-[24px] lg:text-[30px] font-medium'> -Jessica kaur </h4>
                                        <p className='uppercase text-[16px] font-medium'>Naina and Noor</p>
                                    </div>

                                    <div>
                                        {/* <button className="absolute bg-background border border-input disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring font-medium h-8 hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center right-0 ring-offset-background rounded-full text-sm transition-colors w-8 whitespace-nowrap">
                                            <FaLongArrowAltRight
                                                className="lucide lucide-arrow-right h-4 w-4"
                                            />
                                            <span className='sr-only'> Next slide</span>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className='flex flex-col md:flex-row items-center gap-10 md:gap-6'>
                            <div className='w-full md:w-[40%]'>
                                <Image
                                    src="/images/profileImg1.png"
                                    alt='Profile image'
                                    width={400}
                                    height={300}
                                    className=''
                                />
                            </div>
                            <div className='w-full md:w-[60%]'>
                                <Image
                                    src="/images/qoutes-icon.png"
                                    alt='Qoutes Icon'
                                    width={40}
                                    height={40}
                                    className=''
                                />
                                <p className=' text-[17px] lg:text-[24px] mt-6'>
                                    Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my “idea” into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can’t recommend them enough.
                                </p>

                                <div className='mt-8'>
                                    <div>
                                        <h4 className='uppercase text-[24px] lg:text-[30px] font-medium'> -Jessica kaur </h4>
                                        <p className='uppercase text-[16px] font-medium'>Naina and Noor</p>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className='flex flex-col md:flex-row items-center gap-10 md:gap-6'>
                            <div className='w-full md:w-[40%]'>
                                <Image
                                    src="/images/profileImg1.png"
                                    alt='Profile image'
                                    width={400}
                                    height={300}
                                    className=''
                                />
                            </div>
                            <div className='w-full md:w-[60%]'>
                                <Image
                                    src="/images/qoutes-icon.png"
                                    alt='Qoutes Icon'
                                    width={40}
                                    height={40}
                                    className=''
                                />
                                <p className=' text-[17px] lg:text-[24px] mt-6'>
                                    Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my “idea” into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can’t recommend them enough.
                                </p>

                                <div className='mt-8'>
                                    <div>
                                        <h4 className='uppercase text-[24px] lg:text-[30px] font-medium'> -Jessica kaur </h4>
                                        <p className='uppercase text-[16px] font-medium'>Naina and Noor</p>
                                    </div>

                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default TestimonialCard;