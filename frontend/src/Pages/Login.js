// File: pages/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, message } from 'antd';
import './Login.css'
const { Title } = Typography;

const userRoles = {
  'admin@example.com': 'admin',
  'employee1@example.com': 'employee',
  'manager1@example.com': 'manager',
  'hr@example.com': 'hr'
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    const { email, password } = values;
    setLoading(true);

    setTimeout(() => {
      const role = userRoles[email];
      if (role && password === 'password123') {
        localStorage.setItem('userRole', role);
        localStorage.setItem('userEmail', email);
        message.success(`Logged in as ${role}`);
        navigate(`/dashboard`);
      } else {
        message.error('Invalid email or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <Form name="login" onFinish={onFinish} layout="vertical" className="login-form">
        <Title level={3}>Login</Title>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
