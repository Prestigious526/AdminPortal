import { Link } from 'react-router-dom';
import './SidebarAdmin.css';
const SidebarManager = () => {
  return (
    <div className="sidebar">
      <h3>User Panel</h3>
      <ul>
        <li><Link to="/dashboard">User Dashboard</Link></li>
        <li><Link to="/editdetails">Edit Details</Link></li>
        <li><Link to="/questionnaire">Leave Remarks</Link></li>
      </ul>
    </div>
  );
};

export default SidebarManager;
