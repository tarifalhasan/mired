import LetsTalk from '@/components/common/LetsTalk';
import React from 'react';
import ContactForm from './ContactForm';
import Faqs from '@/components/common/Faqs';

const Contact = () => {
    return (
        <div>
            <ContactForm />
            <Faqs />
            <LetsTalk />
        </div>
    );
};

export default Contact;