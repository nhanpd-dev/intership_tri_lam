import React from 'react';
import { List, Avatar, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  ContainerOutlined,
  DingdingOutlined,
  AlertOutlined,
  DollarCircleOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import { WrapperSidebar, Logo, LightLine, ItemContent } from './style';

const { Link } = Typography;

const SildeBar = () => {
  const navigate = useNavigate();

  const dataSideBar = [
    {
      title: 'user',
      label: <UserOutlined />,
      navigate: 'user-management',
      backPage: '',
    },
    {
      title: 'product',
      label: <ContainerOutlined />,
      navigate: 'product-management',
      backPage: '',
    },
    {
      title: 'demo',
      label: <AlertOutlined />,
      navigate: '/3',
      backPage: '',
    },
    {
      title: 'demo',
      label: <DollarCircleOutlined />,
      navigate: '/4',
      backPage: '',
    },
    {
      title: 'demo',
      label: <UserOutlined />,
      navigate: '/5',
      backPage: '',
    },
    {
      title: 'demo',
      label: <UserOutlined />,
      navigate: '/6',
      backPage: '',
    },
    {
      title: 'demo',
      label: <UserOutlined />,
      navigate: '/7',
      backPage: '',
    },
    {
      title: 'LOG OUT',
      label: <LogoutOutlined />,
      navigate: '/8',
      backPage: '',
    },
  ];

  return (
    <WrapperSidebar>
      <Logo>
        <DingdingOutlined />
        <div>TIKI ADMIN</div>
      </Logo>
      <LightLine />
      <List
        itemLayout='horizontal'
        dataSource={dataSideBar}
        renderItem={(item) => (
          <ItemContent>
            <ItemContent.Meta
              onClick={() => {
                navigate(`${item.navigate}`);
              }}
              avatar={<Avatar src={item.label} />}
              title={<Link>{item.title}</Link>}
            />
          </ItemContent>
        )}
      />
    </WrapperSidebar>
  );
};

export default SildeBar;
