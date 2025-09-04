import React from 'react';

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div
            className={`bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 ${className}`}
        >
            {children}
        </div>
    );
};

type CardContentProps = {
    children: React.ReactNode;
    className?: string;
};

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
    return <div className={`p-5 ${className}`}>{children}</div>;
};
