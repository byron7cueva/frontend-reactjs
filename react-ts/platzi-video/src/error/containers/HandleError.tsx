import React, { Component, ReactNode, PropsWithChildren } from 'react';

import { RegularError } from '../components/RegularError';

export class HandleError extends Component<PropsWithChildren<unknown>> {
  state = {
    error: false
  };

  componentDidCatch(): void {
    // Enviar el error a un servicio como Sentry
    this.setState({
      error: true
    });
  }

  render(): ReactNode {
    if (this.state.error) {
      return (
        <RegularError />
      );
    }
    return this.props.children;
  }
}