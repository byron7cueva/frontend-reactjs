import React, { Component } from 'react';

import { HomeLayout } from '../components/HomeLayout';
import { Categories } from '../../categories/components/Categories';
import { Related } from '../components/Related';
import { ModalContainer } from '../../widgets/containers/ModalContainer';
import { Modal } from '../../widgets/components/Modal';

import data from '../../../data/api.json';

export class Home extends Component {
  state = {
    modalVisible: false
  };

  handleCloseModal = (): void => {
    this.setState({
      modalVisible: false
    });
  };

  handleOpenModal = (): void => {
    this.setState({
      modalVisible: true
    });
  };

  render(): JSX.Element {
    return (
      <HomeLayout>
        <Related />
        <Categories data={data.categories} onClickMedia={this.handleOpenModal} />
        {this.state.modalVisible ? (
          <ModalContainer>
            <Modal
              onClickClose={this.handleCloseModal}
            >
              <h1>Esto es un portal</h1>
            </Modal>
          </ModalContainer>
         ): <></>}
      </HomeLayout>
    );
  }
}
