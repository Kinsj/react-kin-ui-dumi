import { Input } from 'react-kin-ui';
import React, { useState } from 'react';

export default () => {
  const [val, setVal] = useState('');
  return (
    <Input value={val} onChange={e => setVal(e.target.value)}/>
  );
}
