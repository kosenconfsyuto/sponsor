import React from 'react';

import './wideContainer.css';

import { ArrowButton } from '@/components/arrowButton/ArrowButton';

export interface WideContainerProps {
    title: string;
    description: string;
    href: string;
    hrefDescription: string;
}

export const WideContainer = ({
    title,
    description,
    href,
    hrefDescription,
    ...props
}: WideContainerProps) => {
    return (
        <div
            className='wideContainer'
            {...props}
        >
            <h2 className='wideContainer__title'>{title}</h2>
            <p className='wideContainer__description'>{description}</p>
            <ArrowButton href={href} label={hrefDescription} />
        </div>
    );
};
