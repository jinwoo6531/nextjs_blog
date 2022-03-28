import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Menu, Input, Row, Col, Modal, Button, Typography } from 'antd';
import Animate from 'rc-animate';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { RiKakaoTalkFill } from 'react-icons/ri';

const AppLayout = ({ children }) => {
  const { Title } = Typography;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClickLogin = useCallback(() => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  }, []);
  const handleCancel = useCallback(() => {
    console.log('zz');
  }, []);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item>
          {isLoggedIn ? (
            <div>프로필</div>
          ) : (
            <button onClick={onClickLogin}>로그인</button>
          )}
        </Menu.Item>
      </Menu>
      {isOpenModal ? (
        <Animate>
          <Modal
            visible={isOpenModal}
            title="Woolog"
            // onOk={this.handleOk}
            // onCancel={this.handleCancel}
            footer={[]}
          >
            <Row>
              <Col
                span={12}
                style={{
                  border: '1px soli red',
                }}
              >
                <img
                  src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg"
                  style={{ width: '100%', height: '100%' }}
                />
              </Col>
              <Col span={12}>
                <div style={{ padding: '20px' }}>
                  <Title level={3}>로그인</Title>
                  <Title level={5}>소셜계정으로 로그인하기!</Title>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      marginTop: '20px',
                    }}
                  >
                    <FcGoogle style={{ width: '20%', height: '20%' }} />
                    <BsGithub style={{ width: '20%', height: '20%' }} />
                    <RiKakaoTalkFill style={{ width: '20%', height: '20%' }} />
                  </div>
                </div>
              </Col>
            </Row>
          </Modal>
        </Animate>
      ) : null}
      <Row>
        <Col xs={24} md={20}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
