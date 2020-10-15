import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import { InitialState } from '../../store/state';
import { ModalDispatchAction } from '../../store/reducers/modal';
import { MediaItem } from '../components/MediaItem';
import { openModal } from '../../store/actions';
import { Media } from '../../types/Media';

//#region Connector
interface MediaContainerProps {
  id: string;
}

function mapStateToProps(state: InitialState, props: MediaContainerProps) {
  return {
    data: state.data.entities.media[props.id]
  }
}

function mapDispatchToProps(dispatch: Dispatch<ModalDispatchAction>) {
  return {
    actions: bindActionCreators({ openModal }, dispatch)
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>
//#endregion Connector


//#region Component
type MediaComponentProps = PropsFromRedux & {
  data: Media;
}

const MediaComponent = (props: MediaComponentProps) => {

  const handleClickMedia = (mediaId: string) => {
    props.actions.openModal(mediaId);
  }

  return (
    <MediaItem data={props.data} onClick={handleClickMedia} />
  );
}
//#endregion Component

const MediaContainer = connector(MediaComponent);

export {
  MediaContainer
}
