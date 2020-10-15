import React from 'react';

import './title.css';

interface TitleProps {
  title: string;
}

export const Title = (props: TitleProps): JSX.Element => (
  <div className="Title">
    <h2>{props.title}</h2>
  </div>
);