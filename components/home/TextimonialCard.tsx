'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "../common/Container";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


const TestimonialCard = () => {

    const testimonials = [
        {
            id: 1,
            comment: "Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my “idea” into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can’t recommend them enough.",
            userName: "-Jessica kaur",
            userTitle: "Naina and Noor",
            userProfile: "/images/profileImg1.png"
        },
        {
            id: 2,
            comment: "Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my “idea” into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can’t recommend them enough.",
            userName: "-James Bond",
            userTitle: "Naina and Noor",
            userProfile: "/images/profileImg1.png"
        },
        {
            id: 3,
            comment: "Miranda and Edward are absolutely wonderful at what they do. I first came to Miranda earlier this year with a business plan, but little to no idea about how to create/cultivate an online presence. Miranda and Edward have turned my “idea” into a steady, growing business that continues to perform better each month. I love their creativity, go-getter attitudes, and dedication to providing a solid product. Can’t recommend them enough.",
            userName: "-Alex Henry",
            userTitle: "Naina and Noor",
            userProfile: "/images/profileImg1.png"
        },
    ];

    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? currentSlider : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === testimonials.length - 1 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         nextSlider();
    //     }, 30000);
    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, [currentSlider]);

    // const isSmallScreen = window.innerWidth <= 768;
    return (
        <>
            <div className="w-full  mx-auto flex flex-row items-center overflow-hidden gap-5 lg:gap-10 ">
                {/* slider container */}
                <div
                    className="ease-linear duration-300 flex transform-gpu relative"
                    style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                    {/* sliders */}
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="py-4 min-w-full duration-200">

                            <div className='flex flex-col md:flex-row items-center gap-10 md:gap-6'>
                                <div className='w-full md:w-[40%]'>
                                    <Image
                                        src={testimonial.userProfile}
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
                                    <p className=' text-[15px] lg:text-[24px] mt-6'>
                                        {testimonial.comment}
                                    </p>

                                    <div className='mt-8 flex flex-col md:flex-row gap-8 justify-between items-center'>
                                        <div className="">
                                            <h4 className='uppercase text-[24px] lg:text-[30px] font-medium'> -{testimonial.userName} </h4>
                                            <p className='uppercase text-[16px] font-medium'>{testimonial.userTitle} </p>
                                        </div>

                                        <div className="flex items-center gap-4 justify-center md:justify-normal">
                                            <button onClick={prevSlider} className="bg-transparent flex justify-center items-center hover:bg-[#420FB0] hover:text-white w-10 lg:w-14 h-10 lg:h-14 border border-[#420FB0]">
                                                <FaLongArrowAltLeft size={20} />
                                            </button>
                                            {/* arrow right */}
                                            <button onClick={nextSlider} className="bg-transparent flex justify-center items-center hover:bg-[#420FB0] hover:text-white w-10 lg:w-14 h-10 lg:h-14 border border-[#420FB0]">
                                                <FaLongArrowAltRight size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;