import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './media.css';
import { Media } from '../../../types/Media';

export interface MediaItemProps {
  data: Media;
  onClick: (mediaId: string) => void;
}

export class MediaItem extends PureComponent<MediaItemProps> {
  handleClick = (): void => {
    this.props.onClick(this.props.data.id);
  };

  render(): JSX.Element {
    const { data: {id, title, author, cover} } = this.props;

    return (
      <Link
        to={{
          pathname: '/videos',
          search: `?id=${id}`
          // state permite enviar un objeto, en donde puedo configurar parametros custom
          /*state: {
            modal: true,
            id
          }*/
        }}
      >
         <div className="Media" onClick={this.handleClick}>
          <div className="Media-cover">
            <img
              src={require(`../../../assets/images/${cover}`)}
              alt={title}
              className="Media-image"
            />
          </div>
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </Link>
    );
  }
}
