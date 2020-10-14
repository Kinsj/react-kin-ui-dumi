import React, {useState} from 'react';
import {Fade, Button} from 'react-kin-ui';

export default function () {
  const [visible, setVisible] = useState(false);
  return (
    <div className="fade-example">
      <div style={{height: 100}}>
        <Button onClick={() => setVisible(!visible)}>fade</Button>
        <Fade visible={visible}>
          <div>数据</div>
        </Fade>
      </div>
    </div>
  );
}
