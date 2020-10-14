import React, { useState } from 'react';
import { Button, Slider } from 'react-kin-ui';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(!visible)}>toggle</Button>
      <Slider visible={visible}>
        <div>sliderExample</div>
        <div>sliderExample</div>
        <div>sliderExample</div>
        <div>sliderExample</div>
        <div>sliderExample</div>
        <div>sliderExample</div>
        <div>sliderExample</div>
      </Slider>
    </div>
  );
}
