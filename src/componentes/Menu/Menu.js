import { FileOutlined, PieChartOutlined, UserOutlined ,TeamOutlined, DesktopOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Form1 from '../formCrud/formCrud1';
//import Form2 from '../formCrud/formCrud2';
const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('PRRODUCTOS', '1', <PieChartOutlined />, [
    getItem('toxishane', '4'),
    getItem('blem', '5'),
    getItem('todolimpia', '6'),
  ]),
  getItem('Compras x Mayor', '2', <PieChartOutlined />),
  getItem('Ventas', '3', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const Menu1 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        /> 
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Form1/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Octi ♥  Design ©2023 Created by Octis
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Menu1;