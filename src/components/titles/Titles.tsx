import React from "react";

import "./titles.css";

export interface ButtonProps {
  title: string;
  description?: string;
}

export const Titles = (props: ButtonProps) => {
  return (
    <div
      className='titlesComp'
      {...props}
    >
      <div className="titles__child">
        <h1 className="title">{props.title}</h1>
        {props.description && <p className="description">{props.description}</p>}
      </div>
    </div>
  );
};
