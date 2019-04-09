import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    /**
     * this is a number
     */
    x: PropTypes.number,
    y: PropTypes.string.isRequired
  };

  static defaultProps = {
    x: 1111,
    y: "stringgggg"
  };

  render() {
    const { children } = this.props;
    return <button>{children}</button>;
  }
}
