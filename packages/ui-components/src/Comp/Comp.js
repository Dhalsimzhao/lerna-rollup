import React from "react";
import styled from "styled-components";

import { Button } from "@leap/ui-elements";

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
