import React from 'react';

import { Button } from '@leap/sdk';

import { storiesOf } from '@storybook/react';

console.log('Button', Button);
storiesOf('Button', module)
  .addParameters({
    info: { text: 'Normal Button' }
  })
  .add('Normal', () => (
    <div>
      <Button>12313</Button>
    </div>
  ));
