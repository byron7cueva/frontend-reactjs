import React from 'react';
import { connect } from 'react-redux';

import { InitialState } from '../../store/types';
import { MediaItem, MediaItemProps } from '../components/MediaItem';

interface MediaContainerProps extends Omit<MediaItemProps, 'data'> {
  id: string;
}

const MediaComponent = (props: MediaItemProps) => (
  <MediaItem data={props.data} onClick={props.onClick} />
);

function mapStateToProps(state: InitialState, props: MediaContainerProps) {
  return {
    data: state.data.entities.media[props.id]
  }
}

const MediaContainer = connect(mapStateToProps)(MediaComponent);

export {
  MediaContainer
}
