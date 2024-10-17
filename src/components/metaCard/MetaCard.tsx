import React from 'react';

import './metaCard.css';

import Article_24dp_000000_FILL0_wght300_GRAD0_opsz24 from "@/components/svg/article_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import Event_24dp_000000_FILL0_wght300_GRAD0_opsz24 from "@/components/svg/event_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import Group_24dp_000000_FILL0_wght300_GRAD0_opsz24 from "@/components/svg/group_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import Location_on_24dp_000000_FILL0_wght300_GRAD0_opsz24 from "@/components/svg/location_on_24dp_000000_FILL0_wght300_GRAD0_opsz24";

export interface ButtonProps {
    icon: "event" | "article" | "location" | "group";
    label: string;
    description: string;
}

export const MetaCard = ({
    icon,
    label,
    description,
    ...props
}: ButtonProps) => {
    return (
        <div
            className='metaCard'
            {...props}
        >
            <div className='metaCard__labels'>
                <div className='metaCard__icon'>
                    {icon === "event" && <Event_24dp_000000_FILL0_wght300_GRAD0_opsz24 color='none' />}
                    {icon === "article" && <Article_24dp_000000_FILL0_wght300_GRAD0_opsz24 color='none' />}
                    {icon === "location" && <Location_on_24dp_000000_FILL0_wght300_GRAD0_opsz24 color='none' />}
                    {icon === "group" && <Group_24dp_000000_FILL0_wght300_GRAD0_opsz24 color='none' />}
                </div>
                <h2 className='metaCard__label'>{label}</h2>
            </div>
            <p className='metaCard__description'>{description}</p>
        </div>
    );
};
