import React, { PureComponent } from 'react';
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
    const { data: {title, author, cover} } = this.props;

    return (
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
    );
  }
}
