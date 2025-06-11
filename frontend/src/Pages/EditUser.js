import React, { useState } from 'react';
import {
  Layout, Form, Input, Button, Typography, Modal, message, Card, Table
} from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import SidebarAdmin from '../components/SidebarAdmin';

const { Content, Sider } = Layout;
const { Title } = Typography;

const EditUser = () => {
  const [form] = Form.useForm();
  const [employees, setEmployees] = useState([
    { id: '101', name: 'abc', email: 'a@example.com', phone: '9879', designation: 'Dev' },
    { id: '102', name: 'xyz', email: 'x@example.com', phone: '68769', designation: 'M' }
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const showAddModal = () => {
    setEditMode(false);
    form.resetFields();
    setIsModalVisible(true);
  };

  const showEditModal = (index) => {
    setEditMode(true);
    setEditingIndex(index);
    form.setFieldsValue(employees[index]);
    setIsModalVisible(true);
  };

  const handleDelete = (index) => {
    const updated = [...employees];
    const deleted = updated.splice(index, 1);
    setEmployees(updated);
    message.success(`Deleted employee: ${deleted[0].name}`);
  };

  const handleModalOk = () => {
    form.validateFields().then(values => {
      if (editMode) {
        const updated = [...employees];
        updated[editingIndex] = values;
        setEmployees(updated);
        message.success('Employee details updated');
      } else {
        setEmployees([...employees, values]);
        message.success('Employee added');
      }
      setIsModalVisible(false);
    }).catch(err => {
      console.log('Validation Failed:', err);
    });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
      key: 'designation',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, __, index) => (
        <>
          <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(index)}>
            Edit
          </Button>
          <Button type="link" danger icon={<DeleteOutlined />} onClick={() => handleDelete(index)}>
            Delete
          </Button>
        </>
      ),
    }
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={220}>
        <SidebarAdmin />
      </Sider>

      <Layout style={{ padding: 24 }}>
        <Content style={{ background: '#fff', padding: 24, borderRadius: 8 }}>
          <Title level={3}>Manage Employees</Title>

          <Card
            title="Employee Table"
            extra={
              <Button icon={<PlusOutlined />} type="primary" onClick={showAddModal}>
                Add Employee
              </Button>
            }
            style={{ maxWidth: '100%' }}
          >
            <Table
              dataSource={employees}
              columns={columns}
              rowKey="id"
              pagination={{ pageSize: 5 }}
            />
          </Card>

          <Modal
            title={editMode ? 'Edit Employee' : 'Add New Employee'}
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={() => setIsModalVisible(false)}
            okText={editMode ? 'Save Changes' : 'Add'}
          >
            <Form form={form} layout="vertical">
              <Form.Item
                label="User ID"
                name="id"
                rules={[{ required: true, message: 'Please enter user ID' }]}
              >
                <Input disabled={editMode} placeholder="Enter ID" />
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
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default EditUser;
