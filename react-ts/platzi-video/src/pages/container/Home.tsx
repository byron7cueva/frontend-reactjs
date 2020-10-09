import React, { Component } from 'react';

import { HomeLayout } from '../components/HomeLayout';
import { Categories } from '../../categories/components/Categories';
import { Related } from '../components/Related';
import { ModalContainer } from '../../widgets/containers/ModalContainer';
import { Modal } from '../../widgets/components/Modal';
import { HandleError } from '../../error/containers/HandleError';
import { VideoPlayer } from '../../player/containers/VideoPlayer';
import { Media } from '../../types/Media';

import data from '../../../data/api.json';

interface HomeState {
  modalVisible: boolean;
  media: Media | null;
}

export class Home extends Component<unknown, HomeState> {
  state = {
    modalVisible: false,
    media: null
  };

  handleCloseModal = (): void => {
    this.setState({
      modalVisible: false
    });
  };

  handleOpenModal = (media: Media): void => {
    this.setState({
      modalVisible: true,
      media
    });
  };

  render(): JSX.Element {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories data={data.categories} onClickMedia={this.handleOpenModal} />
          {this.state.modalVisible ? (
            <ModalContainer>
              <Modal
                onClickClose={this.handleCloseModal}
              >
                <VideoPlayer
                  autoPlay={true}
                  src={this.state.media.src}
                  title={this.state.media.title}
                />
              </Modal>
            </ModalContainer>
          ): <></>}
        </HomeLayout>
      </HandleError>
    );
  }
}
