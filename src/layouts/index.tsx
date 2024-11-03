// layouts/CustomLayout.tsx
import { useEditableMap } from '@ant-design/pro-components';
import { Outlet,history } from '@umijs/max';
import { Layout, Menu } from 'antd';
import { routes } from '../../config/routes';

import React, { ReactNode, useEffect, useState } from 'react';

const { Header, Content, Footer } = Layout;

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = () => {
  const [key,setKey] = useState('home')
  console.log();
  const items = routes.map((routeeItem) => ({
    key: routeeItem.key,
    label: routeeItem.name,
  }));

  useEffect(()=>{
    setKey(window.location.pathname.replace(/^\//, ''))
  },[])

  const onMenuClick = (item: any) => {
    history.push(`/${item.key}`)
    setKey(item.key)
  };

  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          selectedKeys={key}
          style={{ flex: 1, minWidth: 0 }}
          onClick={onMenuClick}
        />
      </Header>

      <Content>
          <Outlet />
      </Content>

     
    </Layout>
  );
};

export default CustomLayout;
