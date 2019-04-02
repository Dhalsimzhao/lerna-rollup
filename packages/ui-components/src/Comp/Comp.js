import React from "react";
// import { Button } from '../../../ui-elements'
import { Button } from "ui-elements";
import styled from "styled-components";

const Box = styled.div`
  border: 1px solid #aaa;
`;
const Comp = () => {
  return (
    <Box>
      <Button>Comp Here</Button>
    </Box>
  );
};

export default Comp;
