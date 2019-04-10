import React from 'react';

import { Button } from '@leap/sdk';

import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .addParameters({
    info: { text: 'Normal Button' }
  })
  .add('Normal', () => (
    <div>
      <Button>2222</Button>
    </div>
  ));
