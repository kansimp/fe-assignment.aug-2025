import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'outline' | 'danger';
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
    let baseStyles =
        'px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 focus:outline-none focus:ring-2';

    let variantStyles = '';
    switch (variant) {
        case 'primary':
            variantStyles = 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300';
            break;
        case 'outline':
            variantStyles = 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 focus:ring-gray-300';
            break;
        case 'danger':
            variantStyles = 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-300';
            break;
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${variantStyles} ${className}`}>
            {children}
        </button>
    );
};
