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
import { CategoryEntity } from '../../schemas';
import { InitialState } from '../../store/state';

interface HomeProps {
  categories: CategoryEntity[]
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
  const categories = state.data.categories.map(categoryId => {
    return state.data.entities.categories[categoryId];
  });

  return {
    categories,
    search: state.data.search
  }
}

const Home = connect(mapStateToProps)(HomeComponent);

export  {
  Home
}