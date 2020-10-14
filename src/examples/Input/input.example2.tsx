import { Button, Input, alert } from 'react-kin-ui';
import React, { useRef } from 'react';

export default () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Input ref={ref}/>
      <Button onClick={() => alert(ref.current?.value || '')}>Get Value</Button>
    </div>
  );
}
