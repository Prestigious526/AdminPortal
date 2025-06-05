import { Menu, Layout } from 'antd';
import {
  UserOutlined,
  PlusSquareOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const SidebarAdmin = () => {
  return (
    <Sider
      width={250}
      style={{
        background: '#fff',
        height: '100vh',
        borderRight: '1px solid #f0f0f0',
        position: 'fixed',
        left: 0,
        top: 0,
        overflow: 'auto',
      }}
    >
      <div style={{ padding: '20px', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
        Admin Panel
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/edituser">Manage Users</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<PlusSquareOutlined />}>
          <Link to="/addquestions">Add Questions</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarAdmin;
