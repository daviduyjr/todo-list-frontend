import React from 'react';
import {
  Row, Col, Layout, Menu, Button
} from 'antd';
import Icon, { AppstoreOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { IProps } from './props';
import './styles.less';

const { Sider, Content, Header } = Layout;

export default (props: IProps) => {
  const {
    children,
  } = props;

  return (
    <div>
      {children}
    </div>
    // <Layout className="main-screen">
    //   <Sider width={230}>
    //     <Row>
    //       <Col span={24}>
    //         <Menu
    //           mode="inline"
    //         >
    //           <Row justify="center" align="middle">
    //             <Col>
    //               <div className="logo" />
    //             </Col>
    //           </Row>
    //           <Menu.Item key={1} icon={<AppstoreOutlined />}>
    //             <Link to="/brands">
    //               Brands
    //             </Link>
    //           </Menu.Item>
    //           <Menu.Item key={2} icon={<AppstoreOutlined />}>
    //             <Link to="/categories">
    //               Categories
    //             </Link>
    //           </Menu.Item>
    //           <Menu.Item key={3} icon={<AppstoreOutlined />}>
    //             <Link to="/products">
    //               Products
    //             </Link>
    //           </Menu.Item>
    //         </Menu>
    //       </Col>
    //     </Row>

    //   </Sider>
    //   <Layout>
    //     <Header>
    //     </Header>
    //     <Content className="content">
    //       {children}
    //     </Content>
    //   </Layout>
    // </Layout>

  );
};
