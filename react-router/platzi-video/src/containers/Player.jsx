import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import NotFound from './NotFound';

import '../assets/styles/components/Player.scss';
import { getVideoSource } from '../actions';

const Player = props => {
  const { match: { params: { id } }, playing } = props;
  const hasPlaying = Object.keys(playing).length > 0;
  const handleBack = () => {
    props.history.goBack();
  };

  useLayoutEffect(() => {
    props.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button type="button" onClick={handleBack}>Regresar</button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

const mapDispatchToProps = {
  getVideoSource
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
