import React from 'react';
import { useSelector } from 'react-redux';
import {
  Form, Row, Col, Card, Button, Spin, Typography, Input
} from 'antd';
import umpisalogo from './assets/umpisalogo.png'
import './styles.less';
import { IProps } from './props';

const { Text } = Typography;

export default (props: IProps) => {
  const { title, onFinish, isLoading, errorMessage } = props;
  const sessionError = useSelector((state: any) => state.sessionError?.message);
  return (
    <Form
      onFinish={onFinish}
      className="landing"
    >
      <Row justify="center">
        <Col span={15} className="content">
          <Row gutter={[5, 24]}>
            <Col span={24}>
              <Card className="card">
                <Row className="logo-container" justify="center">
                  <Col>
                    <img src={umpisalogo} className="logo" alt="logo" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h1>Login</h1>
                  </Col>
                </Row>
                <Row gutter={[0, 16]}>
                  <Col span={24}>
                    <span>Username</span>
                    <Form.Item
                      name="user_name"
                      rules={[
                        {
                          required: true,
                          message: 'Enter your username',
                        },
                      ]}
                    >
                      <Input disabled={isLoading}  size="large" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <span>Password</span>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Enter your password',
                        },
                      ]}
                    >
                      <Input disabled={isLoading} size="large" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    {errorMessage && (<Row justify="center">
                      <Text type='danger'>{errorMessage}</Text>
                    </Row>)}
                    <Row justify="end">
                      <Col>
                        <Button type="link" size="small">Forgot Password?</Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={24}>
                    {
                        !isLoading ? (
                          <Form.Item>
                            <Button
                              htmlType="submit"
                              block
                              type="primary"
                              shape="round"
                              size="large"
                            >
                              Log In
                            </Button>
                          </Form.Item>

                        ) : (
                          <Row justify="center">
                            <Col>
                              <Spin />
                            </Col>
                          </Row>
                        )
                    }
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col span={24} className="copyright-container">
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
};
