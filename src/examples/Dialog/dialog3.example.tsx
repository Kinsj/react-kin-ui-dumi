import React from 'react';
import { Button, confirm, alert, modal } from 'react-kin-ui';

export default () => {
  const openModal = () => {
    // modal的返回值为关闭Dialog操作接口
    const close = modal(
      <h1>你好
        <Button onClick={() => {close();}}>关闭</Button>
      </h1>
    );
  };

  return (
    <div>
      <h1>alert API</h1>
      <Button onClick={() => {alert('hi');}}>alert</Button>
      <h1>confirm API</h1>
      <Button
        onClick={() => {
          confirm('hi',
            () => {console.log('你点击了yes');},
            () => {console.log('你点击了no');});
        }}>confirm
      </Button>
      <h1>modal API</h1>
      <Button onClick={openModal}>modal</Button>
    </div>
  );
}
