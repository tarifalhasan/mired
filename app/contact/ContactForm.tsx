import Container from '@/components/common/Container';
import Heading from '@/components/common/heading/Heading';
import React from 'react';
import { Input } from "@/components/ui/input"
import Button from '@/components/common/button/Buttton';

const ContactForm = () => {
    return (
        <div className='bg-[#F4F2F6] py-20'>
            <Container>
                <div className='max-w-[900px] mx-auto text-center'>
                    <Heading
                        title="Let's get to work"
                        center
                        custom='uppercase text-[39px] md:text-[55px] lg:text-[68px] font-bold leading-tight'
                    />
                    <p className='my-3 max-w-[600px] mx-auto leading-8'>We would love to learn more about your business. If you would like to get in touch, please use the form below.</p>
                </div>

                <div>
                    <form className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12'>
                        <Input type="text" name='name' placeholder="What's Your Name?" className='rounded-none px-6 h-12' />
                        <Input type="email" name='email' placeholder="What's your email address?" className='rounded-none px-6 h-12' />
                        <Input type="text" name='website' placeholder="What's your website address?" className='rounded-none px-6 h-12' />
                        <Input type="text" name='ads' placeholder="Have you done paid ads? If yes, how long?" className='rounded-none px-6 h-12' />
                        <select name="projectSelect" className='rounded-none px-6 h-12 text-[#A9A1AF]'>
                            <option >Select Your Project Type</option>
                            <option >Family Sedan</option>
                            <option >Luxury</option>
                        </select>
                        <Input type="text" name='priceMind' placeholder="Do you have a price in mind?" className='rounded-none px-6 h-12' />
                        <textarea name="help" id="" placeholder='The biggest thing we can help with?' cols={30} rows={8} className='px-6 py-4'></textarea>
                        <textarea name="help" id="" placeholder='Is there anything else we should know?' cols={30} rows={8} className='px-6 py-4'></textarea>

                    </form>
                    <div className='flex justify-center mt-10'>
                        <Button
                            label='submit Your Consultation'

                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactForm;