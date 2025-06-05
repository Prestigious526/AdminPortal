import React, { useState } from 'react';
import { Layout, Select, Form, Input, Button, Typography, Divider, Card, message } from 'antd';
import SidebarManager from '../components/SidebarManager';

const { Content, Sider } = Layout;
const { Option } = Select;
const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const mockEmployees = [
  {
    id: 'EMP001',
    name: 'John Doe',
    responses: [
      { question: 'How do you evaluate your performance?', answer: 'I met my goals effectively.' },
      { question: 'What were your key achievements?', answer: 'Delivered Project X successfully.' },
    ],
  },
  {
    id: 'EMP002',
    name: 'Alice Smith',
    responses: [
      { question: 'How do you evaluate your performance?', answer: 'There is room for improvement.' },
      { question: 'What were your key achievements?', answer: 'Completed training and supported the team.' },
    ],
  },
];

const ManagerRemarks = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [remarks, setRemarks] = useState({});

  const handleEmployeeChange = (value) => {
    const employee = mockEmployees.find((emp) => emp.id === value);
    setSelectedEmployee(employee);
    setRemarks({});
  };

  const handleRemarkChange = (index, value) => {
    setRemarks((prev) => ({ ...prev, [index]: value }));
  };

  const handleSaveRemarks = () => {
    if (!selectedEmployee) {
      message.warning('Please select an employee first.');
      return;
    }

    message.success(`Remarks saved for ${selectedEmployee.name}`);
    console.log(`Remarks for ${selectedEmployee.name}:`, remarks);
    // Add backend API call logic here
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={220} className="site-layout-background">
        <SidebarManager />
      </Sider>
      <Layout style={{ padding: '24px' }}>
        <Content style={{ background: '#fff', padding: 24, borderRadius: 8 }}>
          <Title level={2}>Manager Remarks</Title>

          <Form layout="vertical" style={{ maxWidth: 400 }}>
            <Form.Item label="Select Employee" required>
              <Select placeholder="Choose an employee" onChange={handleEmployeeChange}>
                {mockEmployees.map((emp) => (
                  <Option key={emp.id} value={emp.id}>
                    {emp.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form>

          {selectedEmployee && (
            <Card
              title={`Appraisal Review for ${selectedEmployee.name}`}
              style={{ marginTop: 32 }}
              bordered
            >
              {selectedEmployee.responses.map((resp, idx) => (
                <div key={idx} style={{ marginBottom: 24 }}>
                  <Paragraph>
                    <Text strong>Q{idx + 1}:</Text> {resp.question}
                  </Paragraph>
                  <Paragraph type="secondary">
                    <Text italic>Employee Answer:</Text> {resp.answer}
                  </Paragraph>
                  <Form.Item label="Your Remark">
                    <TextArea
                      rows={3}
                      placeholder="Write your feedback..."
                      value={remarks[idx] || ''}
                      onChange={(e) => handleRemarkChange(idx, e.target.value)}
                    />
                  </Form.Item>
                  <Divider />
                </div>
              ))}
              <Button type="primary" size="large" onClick={handleSaveRemarks}>
                Submit All Remarks
              </Button>
            </Card>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default ManagerRemarks;
