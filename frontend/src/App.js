import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleSelection from './Pages/RoleSelection';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Dashboard from './Pages/Dashboard';
import Questionnaire from './Pages/Questionnaire';
import EditDetails from './Pages/EditDetails';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/editdetails" element={<EditDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;