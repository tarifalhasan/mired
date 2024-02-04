import React from 'react';
import Container from './Container';
import Heading from './heading/Heading';
import Button from './button/Buttton';

const BookingConsultation = () => {
    return (
        <div
            className="bg-[#420FB0] py-24 text-white bg-[url('/images/booking-bg.png')] bg-cover">
            <Container>
                <div className='max-w-[1070px] mx-auto text-center'>
                    <Heading
                        title="Can't Find What You're Looking For? Let's Talk."
                        center
                        custom='uppercase text-[35px] md:text-[55px] lg:text-[58px] font-semibold leading-tight'
                    />
                    <p className='mt-3 mb-6 text-sm md:text-[15px] lg:text-[16px]'>
                        If you are not finding the specific digital solution you need, do not worry. We’ll find somebody who can.
                    </p>
                    <Button
                        label='Book Your Consultation Today'
                        outline
                    />
                </div>
            </Container>
        </div>
    );
};

export default BookingConsultation;