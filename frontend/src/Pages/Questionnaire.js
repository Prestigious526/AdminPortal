import { useState } from 'react';
import { Form, Input, Button, Typography, Layout, Card, message } from 'antd';
import SidebarUser from '../components/SidebarUser';

const { TextArea } = Input;
const { Title } = Typography;
const { Content } = Layout;

const Questionnaire = () => {
  const questions = [
    'Describe your key achievements this year.',
    'What challenges did you face and how did you overcome them?',
    'What are your goals for the next review period?',
    'How can your manager support you better?',
    'Any additional comments or feedback?'
  ];

  const [responses, setResponses] = useState(Array(questions.length).fill(''));

  const handleChange = (index, value) => {
    const updated = [...responses];
    updated[index] = value;
    setResponses(updated);
  };

  const handleSubmit = () => {
    console.log('Submitted responses:', responses);
    message.success('Form submitted successfully!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarUser />
      <Layout style={{ marginLeft: 250, padding: '24px' }}>
        <Content>
          <Card title={<Title level={3}>Employee Appraisal Questionnaire</Title>} style={{ maxWidth: 800, margin: '0 auto' }}>
            <Form layout="vertical" onFinish={handleSubmit}>
              {questions.map((question, idx) => (
                <Form.Item
                  key={idx}
                  label={question}
                  name={`response-${idx}`}
                  rules={[{ required: true, message: 'This field is required.' }]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Write your answer here..."
                    value={responses[idx]}
                    onChange={(e) => handleChange(idx, e.target.value)}
                  />
                </Form.Item>
              ))}
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Questionnaire;
