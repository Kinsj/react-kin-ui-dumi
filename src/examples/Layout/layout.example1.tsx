import "./layout.example.css";
import React from 'react';
import { Content, Footer, Header, Layout } from 'react-kin-ui';

export default () => {
  return (
    <div className="layout-example">
      <Layout className="frame">
        <Header className="header">Header</Header>
        <Content className="content">Content</Content>
        <Footer className="footer">Footer</Footer>
      </Layout>
    </div>
  )
}
