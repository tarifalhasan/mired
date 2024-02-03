import React from 'react';
import WebDesignHeroArea from './WebDesignHeroArea';
import BookingConsultation from '@/components/common/BookingConsultation';
import Faqs from '@/components/common/Faqs';
import LetsTalk from '@/components/common/LetsTalk';
import DesignDevelopment from './DesignDevelopment';
import WeFocusOfWeb from './WeFocusOfWeb';

const page = () => {
    return (
        <div>
            <WebDesignHeroArea />
            <DesignDevelopment />
            <WeFocusOfWeb />
            <BookingConsultation />
            <Faqs />
            <LetsTalk />
        </div>
    );
};

export default page;