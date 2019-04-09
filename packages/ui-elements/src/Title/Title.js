import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const h1 = styled.h1`
  font-size: 20px;
`;

const h2 = styled.h2`
  font-size: 16px;
`;

const h3 = styled.h3`
  font-size: 12px;
`;

const getElem = level => {
  switch (level) {
    case 1:
      return h1;
      break;
    case 2:
      return h2;
      break;
    case 3:
    default:
      return h3;
      break;
  }
};

const Title = props => {
  const { children, level } = props;
  const Elem = getElem(level);
  return <Elem>{children}</Elem>;
};

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3])
};

export default Title;
