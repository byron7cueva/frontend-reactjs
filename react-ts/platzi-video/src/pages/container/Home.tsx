import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

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
import { ModalInitialState, ModalActionType, ModalDispatchAction } from '../../store/reducers/modal';

interface HomeProps {
  categories: CategoryEntity[];
  search: Media[];
  modal: ModalInitialState;
  dispatch: Dispatch<ModalDispatchAction>;
}

class HomeComponent extends Component<HomeProps> {

  handleCloseModal = (): void => {
    this.props.dispatch({
      type: ModalActionType.CloseModal
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
          />
          {this.props.modal.visibility ? (
            <ModalContainer>
              <Modal
                onClickClose={this.handleCloseModal}
              >
                <VideoPlayer
                  autoPlay={true}
                  mediaId={this.props.modal.mediaId}
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
function mapStateToProps(state: InitialState): Partial<HomeProps> {
  const categories = state.data.categories.map(categoryId => {
    return state.data.entities.categories[categoryId];
  });

  return {
    categories,
    search: state.data.search,
    modal: state.modal
  }
}

const Home = connect(mapStateToProps)(HomeComponent);

export  {
  Home
}