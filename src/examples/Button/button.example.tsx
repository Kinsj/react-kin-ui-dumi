import { Button } from 'react-kin-ui';
import React from 'react';

export default () => {
  return (
    <div>
      <p>Normal: <Button>Normal</Button><br/></p>
      <p>Important: <Button level="important">Important</Button><br/></p>
      <p>Danger: <Button level="danger">Danger</Button></p>
    </div>
  );
};
