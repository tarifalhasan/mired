import React from 'react';
import Container from './Container';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
    subsets: ["latin"],
    weight : ['400', '500', '600', '700']
})

const Footer = () => {
    return (
        <div className={`${poppins.className} py-12`}>
            <Container>
                <div>
                    <div className='flex justify-between items-center w-full '>
                        <ul className='w-full lg:w-1/3 flex justify-between gap-3 md:gap-6 items-center text-xs md:text-sm uppercase '>
                            <li>terms of use</li>
                            <li>Privacy policy</li>
                            <li>Pricing Plans</li>
                        </ul>
                        <Link href={"/"} className=' w-1/3 hidden lg:flex justify-center'>
                            <Image
                                src={"/logo.png"}
                                alt="Mired"
                                width={114}
                                height={25}
                            />
                        </Link>
                        <Link href='/contact-us' className='w-1/2 lg:w-1/3 hidden md:flex justify-end'>
                            <Button className="px-6 py-2 bg-[#420FB0]">CONTACT US</Button>
                        </Link>
                    </div>

                    <div className='flex justify-center items-center gap-6 my-8'>
                        <Link href='' className='w-12 h-12 rounded-full p-2 bg-[#F4F2F6] flex justify-center items-center'>
                            <FaFacebookF
                                width={30}
                            />
                        </Link>
                        <Link href='' className='w-12 h-12 rounded-full p-2 bg-[#F4F2F6] flex justify-center items-center'>
                            <FaTwitter  
                                width={30}
                            />
                        </Link>
                        <Link href='' className='w-12 h-12 rounded-full p-2 bg-[#F4F2F6] flex justify-center items-center'>
                            <FaInstagram 
                                width={30}
                            />
                        </Link>
                        <Link href='' className='w-12 h-12 rounded-full p-2 bg-[#F4F2F6] flex justify-center items-center'>
                            <FaLinkedinIn 
                                width={30}
                            />
                        </Link>
                    </div>
                    <hr />

                    <div>
                        <p className='text-center text-md uppercase mt-8'>©2023 mired. All rights reserved</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;