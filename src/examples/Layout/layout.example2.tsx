import './layout.example.css';
import React from 'react';
import { Aside, Content, Footer, Header, Layout } from 'react-kin-ui';

export default () => {
  return (
    <div className="layout-example">
      <Layout className="frame">
        <Header className="header">Header</Header>
        <Layout>
          <Aside className="aside">Aside</Aside>
          <Content className="content">Content</Content>
        </Layout>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  );
}
