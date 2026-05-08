import React from 'react';

const DefaultInput = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    required = false,
}) => {
    return (
        <div className="mb-5">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-xs font-semibold mb-2 text-orange-500"
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className="w-full px-4 py-2 rounded border border-orange-300 bg-white text-gray-900 placeholder-gray-400
                    focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300/40
                    hover:border-orange-400
                    transition-all duration-200 shadow-sm hover:shadow-md
                    placeholder:text-sm placeholder:text-orange-500"
            />
        </div>
    );
};

export default DefaultInput;
