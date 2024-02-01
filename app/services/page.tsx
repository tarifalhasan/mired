import ConsultationBookung from '@/components/common/ConsultationBookung';
import LetsTalk from '@/components/common/LetsTalk';
import DisplayServices from '@/components/services/DisplayServices';
import React from 'react';

const Services = () => {
    return (
        <div>
            <ConsultationBookung />
            <DisplayServices />
            <LetsTalk />
        </div>
    );
};

export default Services;