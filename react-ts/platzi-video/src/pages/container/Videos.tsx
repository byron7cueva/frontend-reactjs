import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router';

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
import { ModalInitialState, ModalDispatchAction } from '../../store/reducers/modal';
import * as actions from '../../store/actions';

/**
 * Retorna que datos quiereo del estado del store enviarle como propiedades al componente
 * 
 * @param state 
 */
function mapStateToProps(state: InitialState) {
  const categories = state.data.categories.map(categoryId => {
    return state.data.entities.categories[categoryId];
  });

  return {
    categories,
    search: state.data.search,
    modal: state.modal,
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch: Dispatch<ModalDispatchAction>) {
  return {
    //  bindActionCreators(acciones, dispatch)
    actions: bindActionCreators(actions, dispatch)
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type HomeProps = PropsFromRedux & {
  categories: CategoryEntity[];
  search: Media[];
  modal: ModalInitialState;
} & RouteComponentProps<never, never, {id: string}>;


class VideosComponent extends Component<HomeProps> {

  handleCloseModal = (): void => {
    this.props.actions.closeModal();
  };

  componentDidMount() {
    const { state, search } = this.props.location;
    if (search) {
      // const id = search.split('=')[1];
      this.props.actions.openModal(state.id.toString());
    }
  }

  render(): JSX.Element {
    return (
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            data={this.props.categories}
            search={this.props.search}
            isLoading={this.props.isLoading.active}
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



const Videos = withRouter(connector(VideosComponent));

export  {
  Videos
}