import React, { useState } from 'react';
import { Button, Dialog } from 'react-kin-ui';

export default function() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => {setVisible(!visible);}}>Show Dialog</Button>
      <Dialog
        visible={visible}
        closeOnClickMask={true}
        buttons={[
          <Button level={'important'} onClick={() => {setVisible(false);}}>Ok</Button>,
          <Button onClick={() => {setVisible(false);}}>Cancel</Button>,
        ]} onClose={() => {setVisible(false);}}
      >
        <div>hi</div>
      </Dialog>
    </div>
  );
}
