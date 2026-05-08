import React from 'react';

const DefaultButton = ({
    label = "Click the Button",
    onClick,
    type = "button",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`w-full py-2 px-8 rounded-xl font-semibold text-white
                transition-all duration-200 shadow-md hover:shadow-lg
                ${disabled
                        ? 'bg-gray-400 cursor-not-allowed'
                        : `bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
                            hover:from-orange-500 hover:via-orange-600 hover:to-orange-700
                            focus:outline-none focus:ring-2 focus:ring-orange-300/40`}
                transform hover:-translate-y-0.5`}
        >
            {label}
        </button>
    );
};

export default DefaultButton;