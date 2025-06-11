import React, { useState } from 'react';
import {
  Layout, Form, Input, Button, Typography, Modal, message, Card, Select, Row, Col, List
} from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import SidebarAdmin from '../components/SidebarAdmin';

const { Content, Sider } = Layout;
const { Title } = Typography;
const { Option } = Select;

const AddQuestions = () => {
  const [form] = Form.useForm();
  const [year, setYear] = useState(null);
  const [quarter, setQuarter] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editText, setEditText] = useState('');
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const [questionBank, setQuestionBank] = useState({});

  const getKey = (yr, qt) => `${yr}-Q${qt}`;
  const selectedKey = getKey(year, quarter);
  const questions = questionBank[selectedKey] || [];

  const showAddModal = () => {
    form.resetFields();
    setAddModalVisible(true);
  };

  const handleAddQuestion = ({ question }) => {
    const updated = [...questions, question];
    setQuestionBank({ ...questionBank, [selectedKey]: updated });
    setAddModalVisible(false);
    message.success('Question added!');
  };

  const handleDelete = (index) => {
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestionBank({ ...questionBank, [selectedKey]: updated });
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
    setQuestionBank({ ...questionBank, [selectedKey]: updated });
    setEditModalVisible(false);
    message.success('Question updated');
  };

  const yearOptions = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={220}>
        <SidebarAdmin />
      </Sider>

      <Layout style={{ padding: '24px' }}>
        <Content style={{ padding: 24, background: '#fff', borderRadius: 8 }}>
          <Title level={3}>Manage Appraisal Questions</Title>

          <Row gutter={16} style={{ marginBottom: 24 }}>
            <Col span={6}>
              <Select
                placeholder="Select Year"
                style={{ width: '100%' }}
                onChange={(value) => setYear(value)}
                value={year}
              >
                {yearOptions.map((y) => (
                  <Option key={y} value={y}>{y}</Option>
                ))}
              </Select>
            </Col>
            <Col span={6}>
              <Select
                placeholder="Select Quarter"
                style={{ width: '100%' }}
                onChange={(value) => setQuarter(value)}
                value={quarter}
              >
                <Option value={1}>Q1</Option>
                <Option value={2}>Q2</Option>
                <Option value={3}>Q3</Option>
                <Option value={4}>Q4</Option>
              </Select>
            </Col>
          </Row>

          {year && quarter ? (
            <>
              <Card
                title={`Questions for ${selectedKey}`}
                extra={
                  <Button icon={<PlusOutlined />} type="primary" onClick={showAddModal}>
                    Add Question
                  </Button>
                }
                style={{ maxWidth: 800 }}
              >
                <List
                  bordered
                  dataSource={questions}
                  locale={{ emptyText: 'No questions added yet.' }}
                  renderItem={(item, index) => (
                    <List.Item
                      actions={[
                        <Button type="link" icon={<EditOutlined />} onClick={() => showEditModal(index)}>Edit</Button>,
                        <Button type="link" icon={<DeleteOutlined />} danger onClick={() => handleDelete(index)}>Delete</Button>,
                      ]}
                    >
                      {item}
                    </List.Item>
                  )}
                />
              </Card>

              {/* Modal for Adding Question */}
              <Modal
                title={`Add New Question for ${selectedKey}`}
                open={isAddModalVisible}
                onOk={() => {
                  form.validateFields().then(handleAddQuestion);
                }}
                onCancel={() => setAddModalVisible(false)}
                okText="Add"
              >
                <Form form={form} layout="vertical">
                  <Form.Item
                    name="question"
                    label="Question"
                    rules={[{ required: true, message: 'Please enter a question' }]}
                  >
                    <Input.TextArea rows={3} placeholder="Enter new question" />
                  </Form.Item>
                </Form>
              </Modal>

              {/* Modal for Editing Question */}
              <Modal
                title="Edit Question"
                open={isEditModalVisible}
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
            </>
          ) : (
            <Card>
              <Typography.Text type="warning">
                Please select both Year and Quarter to manage questions.
              </Typography.Text>
            </Card>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AddQuestions;
