import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HomeLayout } from '../components/HomeLayout';
import { Categories } from '../../categories/components/Categories';
import { Related } from '../components/Related';
import { ModalContainer } from '../../widgets/containers/ModalContainer';
import { Modal } from '../../widgets/components/Modal';
import { HandleError } from '../../error/containers/HandleError';
import { VideoPlayer } from '../../player/containers/VideoPlayer';
import { Media } from '../../types/Media';
import { Category } from '../../types/Category';
import { InitialState } from '../../store/types';

interface HomeProps {
  categories: Category[]
  search: Media[]
}

interface HomeState {
  modalVisible: boolean;
  media: Media | null;
}

class HomeComponent extends Component<HomeProps, HomeState> {
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
          <Categories
            data={this.props.categories}
            search={this.props.search}
            onClickMedia={this.handleOpenModal}
          />
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

/**
 * Retorna que datos quiereo del estado del store enviarle como propiedades al componente
 * 
 * @param state 
 */
function mapStateToProps(state: InitialState): HomeProps {
  return {
    categories: state.data.categories,
    search: state.search
  }
}

const Home = connect(mapStateToProps)(HomeComponent);

export  {
  Home
}