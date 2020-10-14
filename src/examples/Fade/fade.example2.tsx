import React, { useState } from 'react';
import { FadeUp, Button } from 'react-kin-ui';

export default function() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="fade-example">
      <div style={{ height: 100 }}>
        <Button onClick={() => setVisible(!visible)}>fadeUp</Button>
        <FadeUp visible={visible}>
          <div>数据</div>
        </FadeUp>
      </div>
    </div>
  );
}
