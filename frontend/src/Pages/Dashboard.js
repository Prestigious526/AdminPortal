import { Layout, Typography, Card, Descriptions, message, Spin } from 'antd';
import SidebarAdmin from '../components/SidebarAdmin';
import SidebarUser from '../components/SidebarUser';
import SidebarManager from '../components/SidebarManager';
import { useEffect, useState } from 'react';
import axios from 'axios';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const userRole = localStorage.getItem('userRole');
  const userId = localStorage.getItem('userId');
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const renderSidebar = () => {
    if (userRole === 'admin') return <SidebarAdmin />;
    if (userRole === 'employee') return <SidebarUser />;
    if (userRole === 'manager') return <SidebarManager />;
    message.error('Invalid credentials. Please login again.');
    return null;
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/employees/${userId}`);
        setUserDetails(response.data);
      } catch (error) {
        console.error(error);
        message.error('Failed to fetch user details.');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserDetails();
    } else {
      message.error('No user ID found. Please login again.');
    }
  }, [userId]);

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
          {loading ? (
            <Spin tip="Loading user details..." />
          ) : (
            userDetails && (
              <Card title="User Details" bordered={false}>
                <Descriptions column={1}>
                  <Descriptions.Item label="Name">{userDetails.name}</Descriptions.Item>
                  <Descriptions.Item label="ID">{userDetails.id}</Descriptions.Item>
                  <Descriptions.Item label="Designation">{userDetails.designation}</Descriptions.Item>
                  <Descriptions.Item label="Email">{userDetails.email}</Descriptions.Item>
                  <Descriptions.Item label="Phone">{userDetails.phone}</Descriptions.Item>
                </Descriptions>
              </Card>
            )
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
