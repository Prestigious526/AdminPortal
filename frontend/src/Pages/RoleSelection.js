import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Select Login Role</h2>
      <button onClick={() => navigate('/login/admin')}>Admin Login</button>
      <button onClick={() => navigate('/login/employee')}>Employee Login</button>
    </div>
  );
};

export default RoleSelection;