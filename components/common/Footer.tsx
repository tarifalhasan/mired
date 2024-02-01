import React from 'react';
import Container from './Container';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='py-12'>
            <Container>
                <div>
                    <div className='flex justify-between items-center w-full '>
                        <ul className='flex justify-between gap-4 md:gap-6 items-center text-sm uppercase font-poppins'>
                            <li>terms of use</li>
                            <li>Privacy policy</li>
                            <li>Pricing Plans</li>
                        </ul>
                        <Link href={"/"} className='hidden lg:block'>
                            <Image
                                src={"/logo.png"}
                                alt="Mired"
                                width={114}
                                height={25}
                            />
                        </Link>
                        <Link href='/contact-us' className='hidden lg:block'>
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