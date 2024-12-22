import React from "react";

import "./metaCard.css";

import ArticleIcon from "@/components/svg/article_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import EventIcon from "@/components/svg/event_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import GroupIcon from "@/components/svg/group_24dp_000000_FILL0_wght300_GRAD0_opsz24";
import LocationOnIcon from "@/components/svg/location_on_24dp_000000_FILL0_wght300_GRAD0_opsz24";

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
          {icon === "event" && <EventIcon color='none' />}
          {icon === "article" && <ArticleIcon color='none' />}
          {icon === "location" && <LocationOnIcon color='none' />}
          {icon === "group" && <GroupIcon color='none' />}
        </div>
        <h2 className='metaCard__label'>{label}</h2>
      </div>
      <p className='metaCard__description'>{description}</p>
    </div>
  );
};
