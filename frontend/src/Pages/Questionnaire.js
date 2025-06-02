// File: pages/Questionnaire.js
import { useState } from 'react';
import SidebarUser from '../components/SidebarUser';
import './Questionnaire.css';

const Questionnaire = () => {
  const questions = [
    'Describe your key achievements this year.',
    'What challenges did you face and how did you overcome them?',
    'What are your goals for the next review period?',
    'How can your manager support you better?',
    'Any additional comments or feedback?'
  ];

  const [responses, setResponses] = useState(Array(questions.length).fill(''));

  const handleChange = (index, value) => {
    const updated = [...responses];
    updated[index] = value;
    setResponses(updated);
  };

  const handleSubmit = () => {
    console.log('Submitted responses:', responses);
    alert('Form submitted successfully!');
  };

  return (
    <div className="questionnaire-container">
      <SidebarUser />
      <div className="questionnaire-content">
        <h2>Employee Appraisal Questionnaire</h2>
        {questions.map((q, idx) => (
          <div className="question-block" key={idx}>
            <label>{q}</label>
            <textarea
              value={responses[idx]}
              onChange={(e) => handleChange(idx, e.target.value)}
              rows={4}
              placeholder="Write your answer here..."
            />
          </div>
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Questionnaire;