import React from 'react';
import {useNavigate } from 'react-router-dom';
import './SubjectList.css'; // Import the CSS file

const SubjectList = () => {
  const subjects = ['Math', 'Science', 'History'];
  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    navigate(`/quiz/${subject}`);
    console.log(`Navigate to quiz for ${subject}`);
  };
  const handleLogout =() => {
    navigate(`/`);
  }

  return (
    <div>
       <div className='button-padding'>
      <button  onClick={() => handleLogout()}>
              LOGOUT
            </button>
            </div>
    <div className="subject-list">
      <h1>Select a Subject</h1>
      <ul>
        {subjects.map((subject) => (
          <li key={subject} className="subject-item">
            <button className="subject-button" onClick={() => handleSubjectClick(subject)}>
              {subject}
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default SubjectList;