import React, { useState } from 'react';
import { Layout, Form, Input, Button, List, Typography, Modal, message, Card } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import SidebarAdmin from '../components/SidebarAdmin';

const { Content, Sider } = Layout;
const { Title } = Typography;

const AddQuestions = () => {
  const [form] = Form.useForm();
  const [questions, setQuestions] = useState([
    'Describe your key achievements this year.',
    'What challenges did you face and how did you overcome them?',
  ]);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editText, setEditText] = useState('');

  const handleAddQuestion = (values) => {
    setQuestions([...questions, values.question]);
    form.resetFields();
    message.success('Question added!');
  };

  const handleDelete = (index) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
    message.success('Question deleted');
  };

  const showEditModal = (index) => {
    setEditIndex(index);
    setEditText(questions[index]);
    setEditModalVisible(true);
  };

  const handleEditSave = () => {
    const updated = [...questions];
    updated[editIndex] = editText;
    setQuestions(updated);
    setEditModalVisible(false);
    message.success('Question updated');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={220}>
        <SidebarAdmin />
      </Sider>

      <Layout style={{ padding: '24px' }}>
        <Content style={{ padding: 24, background: '#fff', borderRadius: 8 }}>
          <Title level={3}>Manage Appraisal Questions</Title>

          <Card title="Add New Question" bordered={false} style={{ maxWidth: 600, marginBottom: 24 }}>
            <Form layout="vertical" form={form} onFinish={handleAddQuestion}>
              <Form.Item
                name="question"
                label="Question"
                rules={[{ required: true, message: 'Please enter a question' }]}
              >
                <Input.TextArea rows={2} placeholder="Enter new question" />
              </Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                Add Question
              </Button>
            </Form>
          </Card>

          <Card title="Current Questions" bordered={false} style={{ maxWidth: 800 }}>
            <List
              bordered
              dataSource={questions}
              renderItem={(item, index) => (
                <List.Item
                  actions={[
                    <Button
                      type="link"
                      icon={<EditOutlined />}
                      onClick={() => showEditModal(index)}
                    >
                      Edit
                    </Button>,
                    <Button
                      type="link"
                      icon={<DeleteOutlined />}
                      danger
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>,
                  ]}
                >
                  {item}
                </List.Item>
              )}
            />
          </Card>

          {/* Edit Modal */}
          <Modal
            title="Edit Question"
            visible={isEditModalVisible}
            onOk={handleEditSave}
            onCancel={() => setEditModalVisible(false)}
            okText="Save"
          >
            <Input.TextArea
              rows={3}
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AddQuestions;
