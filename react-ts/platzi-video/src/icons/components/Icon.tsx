import React from 'react';

export interface IconProps {
  size: number;  
  color: string;
  children?: JSX.Element;
}

export const Icon = ({size, color, children}: IconProps) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 32 32"
  >
    {children}
  </svg>
);