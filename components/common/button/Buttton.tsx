import React from 'react';

interface ButtonProps {
    label: string,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string,

}

const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    outline,
    small,
    custom
}) => {
    return (
        <button
            disabled={disabled}
            className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md transition font-bold uppercase
            ${outline ? 'bg-white text-black' : 'bg-[#420FB0] text-white'}
            ${small ? 'text-sm font-light py-2 px-6' : 'text-[16px] px-10 py-5 border-2'}
            ${custom ? custom : ''}
            `}>
            {label}

        </button>
    );
};

export default Button;