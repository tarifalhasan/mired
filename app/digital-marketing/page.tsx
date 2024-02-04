import React from 'react';
import MarketingHeroArea from './MarketingHeroArea';
import EnsureYourBrand from './EnsureYourBrand';
import LetsTalk from '@/components/common/LetsTalk';
import Faqs from '@/components/common/Faqs';
import BookingConsultation from '@/components/common/BookingConsultation';
import WeFocus from './WeFocus';

const page = () => {
    return (
        <div>
            <MarketingHeroArea />
            <EnsureYourBrand />
            <WeFocus />
            <BookingConsultation />
            <Faqs />
            <LetsTalk />
        </div>
    );
};

export default page;