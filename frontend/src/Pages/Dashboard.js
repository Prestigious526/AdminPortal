import { Layout, Typography, Card, Descriptions, message } from 'antd';
import SidebarAdmin from '../components/SidebarAdmin';
import SidebarUser from '../components/SidebarUser';
import SidebarManager from '../components/SidebarManager';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const userRole = localStorage.getItem('userRole');

  const renderSidebar = () => {
    if (userRole === 'admin') return <SidebarAdmin />;
    if (userRole === 'employee') return <SidebarUser />;
    if (userRole === 'manager') return <SidebarManager />;
    message.error('Invalid credentials. Please login again.');
    return null;
  };

  const userDetails = {
    name: 'Jane Doe',
    id: 'ADM001',
    designation: 'System Administrator',
    email: 'jane.doe@example.com',
    phone: '+91-9876543210',
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} theme="light">
        {renderSidebar()}
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: '0 24px' }}>
          <Title level={3} style={{ margin: 0 }}>
            Welcome to the Dashboard
          </Title>
        </Header>

        <Content style={{ margin: '24px', background: '#fff', padding: 24 }}>
          <Card title="User Details" bordered={false}>
            <Descriptions column={1}>
              <Descriptions.Item label="Name">{userDetails.name}</Descriptions.Item>
              <Descriptions.Item label="ID">{userDetails.id}</Descriptions.Item>
              <Descriptions.Item label="Designation">{userDetails.designation}</Descriptions.Item>
              <Descriptions.Item label="Email">{userDetails.email}</Descriptions.Item>
              <Descriptions.Item label="Phone">{userDetails.phone}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
