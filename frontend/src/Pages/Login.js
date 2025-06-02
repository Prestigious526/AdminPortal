import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (role === 'admin' && email === 'admin@example.com' && password === 'admin') {
      navigate('/dashboard');
    } else if (role === 'employee' && email === 'employee@example.com' && password === 'employee') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
      <input
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;