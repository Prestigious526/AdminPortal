import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarUser from '../components/SidebarUser';
import { Form, Input, Button, Typography, Layout, Card } from 'antd';
import './EditDetails.css';

const { Title } = Typography;
const { Content } = Layout;

const EditDetails = () => {
  const [user, setUser] = useState({
    id: 'EMP123',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    designation: 'Software Engineer',
  });

  const navigate = useNavigate();

  const handleChange = (changedValues) => {
    setUser((prev) => ({ ...prev, ...changedValues }));
  };

  const handleSave = () => {
    console.log('Updated User:', user);
    alert('User details updated successfully!');
    navigate('/dashboard');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarUser />
      <Layout style={{ marginLeft: 250, padding: '24px' }}>
        <Content>
          <Card title="Edit Your Details" bordered={false} style={{ maxWidth: 600, margin: '0 auto' }}>
            <Form
              layout="vertical"
              initialValues={user}
              onValuesChange={(_, allValues) => handleChange(allValues)}
              onFinish={handleSave}
            >
              <Form.Item label="ID" name="id">
                <Input disabled />
              </Form.Item>

              <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name!' }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email!' }]}>
                <Input type="email" />
              </Form.Item>

              <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Designation" name="designation" rules={[{ required: true, message: 'Please enter your designation!' }]}>
                <Input />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Save
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EditDetails;
