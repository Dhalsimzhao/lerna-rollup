import React, { Component } from "react";
import Tooltip from "rc-tooltip";

import Title from "./Title";

export default class TooltipTitle extends Component {
  render() {
    return (
      <Tooltip
        placement="left"
        trigger={["click"]}
        overlay={<span>tooltip</span>}
      >
        <Title>Tooltip Title</Title>
      </Tooltip>
    );
  }
}
