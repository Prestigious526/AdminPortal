import { Box, Typography, Paper } from '@mui/material';
import './Dashboard.css';
import SidebarAdmin from '../components/SidebarAdmin';
import SidebarUser from '../components/SidebarUser';
import SidebarManager from '../components/SidebarManager';
const Dashboard= () => {
  const userRole = localStorage.getItem('userRole'); 
  const Sidebar = () => {
  if (userRole === 'admin') {
    return <SidebarAdmin />;
  } else if (userRole === 'employee') {
    return <SidebarUser />;
  } else if (userRole === 'manager') {
    return <SidebarManager />;
  } else {
    alert('Invalid credentials');
    return null;
  }
};
  const adminDetails = {
    name: 'Jane Doe',
    id: 'ADM001',
    designation: 'System Administrator',
    email: 'jane.doe@example.com',
    phone: '+91-9876543210'
  };

  return (
    <div className="dashboard">
      
      <Sidebar/>
      <div className="content">
        <h2>Welcome to the Dashboard</h2>
        <Paper>
          <Typography variant="h6"><strong>Details</strong></Typography>
          <Typography><strong>Name:</strong> {adminDetails.name}</Typography>
          <Typography><strong>ID:</strong> {adminDetails.id}</Typography>
          <Typography><strong>Designation:</strong> {adminDetails.designation}</Typography>
          <Typography><strong>Email:</strong> {adminDetails.email}</Typography>
          <Typography><strong>Phone:</strong> {adminDetails.phone}</Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
