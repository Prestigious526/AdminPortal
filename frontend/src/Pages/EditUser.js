import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Form, Input, Button, Radio, Typography, message, Space, Card } from 'antd';
import SidebarAdmin from '../components/SidebarAdmin';

const { Content, Sider } = Layout;
const { Title } = Typography;

const EditUser = () => {
  const [form] = Form.useForm();
  const [mode, setMode] = useState('add');
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    designation: ''
  });

  const navigate = useNavigate();

  const handleSave = () => {
    form.validateFields()
      .then((values) => {
        if (mode === 'add') {
          message.success('New user added successfully!');
          console.log('Adding user:', values);
        } else {
          message.success('User details updated successfully!');
          console.log('Updating user:', values);
        }
        navigate('/admin');
      })
      .catch((info) => {
        console.log('Validation failed:', info);
      });
  };

  const handleDelete = () => {
    message.warning(`User with ID ${user.id} deleted successfully!`);
    console.log('Deleting user:', user.id);
    navigate('/admin');
  };

  const handleFormChange = (_, allValues) => {
    setUser(allValues);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={220}>
        <SidebarAdmin />
      </Sider>
      <Layout style={{ padding: '24px' }}>
        <Content style={{ background: '#fff', padding: 24, borderRadius: 8 }}>
          <Title level={3}>{mode === 'add' ? 'Add New User' : 'Edit User Details'}</Title>

          <Card bordered style={{ maxWidth: 600 }}>
            <Form
              layout="vertical"
              form={form}
              initialValues={user}
              onValuesChange={handleFormChange}
            >
              <Form.Item
                label="User ID"
                name="id"
                rules={[{ required: true, message: 'Please enter user ID' }]}
              >
                <Input placeholder="Enter ID" disabled={mode === 'edit'} />
              </Form.Item>

              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter name' }]}
              >
                <Input placeholder="Enter name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, type: 'email', message: 'Enter valid email' }]}
              >
                <Input placeholder="Enter email" />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, message: 'Enter phone number' }]}
              >
                <Input placeholder="Enter phone number" />
              </Form.Item>

              <Form.Item
                label="Designation"
                name="designation"
                rules={[{ required: true, message: 'Enter designation' }]}
              >
                <Input placeholder="Enter designation" />
              </Form.Item>

              <Space style={{ marginTop: 16 }}>
                <Button type="primary" onClick={handleSave}>
                  {mode === 'add' ? 'Add User' : 'Save Changes'}
                </Button>
                {mode === 'edit' && (
                  <Button danger onClick={handleDelete}>
                    Delete User
                  </Button>
                )}
              </Space>
            </Form>
          </Card>

          <Card style={{ marginTop: 24, maxWidth: 600 }}>
            <Radio.Group value={mode} onChange={(e) => setMode(e.target.value)}>
              <Radio value="add">Add Mode</Radio>
              <Radio value="edit">Edit Mode</Radio>
            </Radio.Group>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EditUser;
