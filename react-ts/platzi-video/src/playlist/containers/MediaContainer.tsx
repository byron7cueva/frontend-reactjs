import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { InitialState } from '../../store/state';
import { ModalDispatchAction, ModalActionType } from '../../store/reducers/modal';
import { MediaItem, MediaItemProps } from '../components/MediaItem';

interface MediaContainerProps {
  id: string;
}

interface MediaComponentProps extends Omit<MediaItemProps, 'onClick'> {
  dispatch: Dispatch<ModalDispatchAction>;
}

const MediaComponent = (props: MediaComponentProps) => {

  const handleClickMedia = (mediaId: string) => {
    props.dispatch({
      type: ModalActionType.OpenModal,
      payload: {
        mediaId
      }
    })
  }

  return (
    <MediaItem data={props.data} onClick={handleClickMedia} />
  );
}

function mapStateToProps(state: InitialState, props: MediaContainerProps) {
  return {
    data: state.data.entities.media[props.id]
  }
}

const MediaContainer = connect(mapStateToProps)(MediaComponent);

export {
  MediaContainer
}
