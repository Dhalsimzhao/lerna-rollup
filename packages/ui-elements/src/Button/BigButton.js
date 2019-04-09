import React, { Component } from 'react';

export default class BigButton extends Component {
  render() {
    const { children } = this.props;
    return <button style={{ transform: 'scale(1.5)' }}>{children}</button>;
  }
}
