import React from 'react';
import './media.css';

export enum MediaType {
  Video,
  Audio
}

interface MediaProps {
  title: string; // PropTypes.string.isRequired
  author: string;
  image: string;
  type: MediaType; // PropTypes.onOf([])
}

export const Media = (props: MediaProps) => {
  const handleClick = () => {
    console.log('Haciendo click');
  }

  return (
    <div className='Media' onClick={handleClick}>
      <div className='Media-cover'>
        <img
          src={props.image}
          alt={props.title}
          className="Media-image"
        />
        <h3 className="Media-title">{props.title}</h3>
        <p className="Media-author">{props.author}</p>
      </div>
    </div>
  );
}