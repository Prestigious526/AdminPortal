import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarUser from '../components/SidebarUser';
import './EditDetails.css'
const EditDetails= () => {
  // Mock user data; in a real app, fetch this based on user ID
  const [user, setUser] = useState({
    id: 'EMP123',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    designation: 'Software Engineer',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Updated User:', user);
    alert('User details updated successfully!');
    navigate('/dashboard');
  };

  return (
    <div className="edit-user-container">
      <SidebarUser />
      <div className="edit-user-content">
        <h2>Edit User Details</h2>
        <form>
          <label>ID</label>
          <input type="text" value={user.id} disabled />

          <label>Name</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} />

          <label>Phone</label>
          <input type="text" name="phone" value={user.phone} onChange={handleChange} />

          <label>Designation</label>
          <input type="text" name="designation" value={user.designation} onChange={handleChange} />

          <button type="button" onClick={handleSave}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditDetails;
