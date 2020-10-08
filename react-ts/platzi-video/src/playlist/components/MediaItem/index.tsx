import React, { PureComponent } from 'react';
import './media.css';

import { Media } from '../../../types/Media';

export class MediaItem extends PureComponent<Media> {
  handleClick = () => {
    console.log('Haciendo click');
  };

  render() {
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img
            src={require(`../../../assets/images/${this.props.cover}`)}
            alt={this.props.title}
            className="Media-image"
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    );
  }
}
