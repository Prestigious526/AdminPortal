import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Dashboard from './Pages/Dashboard';
import Questionnaire from './Pages/Questionnaire';
import EditDetails from './Pages/EditDetails';
import EditUser from './Pages/EditUser';
import ManagerRemarks from './Pages/Remarks';
import AddQuestions from './Pages/AddQuestions';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/editdetails" element={<EditDetails />} />
        <Route path="/edituser" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/remarks" element={<ManagerRemarks />} />
        <Route path="/addquestions" element={<AddQuestions />} />
      </Routes>
    </Router>
  );
}

export default App;