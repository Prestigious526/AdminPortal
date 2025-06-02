import { Link } from 'react-router-dom';
import './SidebarAdmin.css';
const SidebarAdmin = () => {
  return (
    <div className="sidebar">
      <h3>Admin Panel</h3>
      <ul>
        <li><Link to="/users">Manage Users</Link></li>
        <li><Link to="/AddQuestions">Add Questions</Link></li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;
