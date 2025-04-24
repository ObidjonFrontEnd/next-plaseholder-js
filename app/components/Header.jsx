'use client'
import React from 'react';
import {Layout, Menu } from 'antd';
import Link from 'next/link'
const { Header } = Layout;

const items = [
 
  {
    key: String(1),
    label: <Link href={`/posts`}>posts</Link>,
  },
  {
    key: String(2),
    label:<Link href={`/comments`}>Comments</Link>,
  },
  {
    key: String(3),
    label:<Link href={`/albums`}>albums</Link>,
  },
  {
    key: String(4),
    label:<Link href={`/todos`}>todos</Link>,
  },
  {
    key: String(5),
    label:<Link href={`/users`}>users</Link>,
  },
]
const Nav = () => {

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
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          
        />
      </Header>
    </Layout>
  );
};
export default Nav;