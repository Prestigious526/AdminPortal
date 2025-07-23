// File: pages/Login.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Typography, message, Card, AutoComplete } from 'antd';
import './Login.css'
import axios from 'axios';
const { Title } = Typography;

const userRoles = {
  'admin@example.com': 'admin',
  'employee1@example.com': 'employee',
  'manager1@example.com': 'manager',
  'hr@example.com': 'hr'
};

const onFinish = async (values) => {
  setLoading(true);
  try {
    const response = await fetch('http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token); // Save JWT
    message.success("Login successful");

    // optional: decode role from token or use your current logic
    localStorage.setItem('userRole', 'employee');
    localStorage.setItem('userEmail', values.email);

    navigate('/dashboard');
  } catch (err) {
    message.error(err.message || 'Invalid credentials');
  } finally {
    setLoading(false);
  }
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
