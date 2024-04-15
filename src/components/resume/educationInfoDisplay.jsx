import React from 'react';
import "../../styles/educationDisplay.css";

const EducationInfoDisplay = ({ educationInfo }) => {
  return (
    <div className='container'>
      <h3>Education</h3>
      {educationInfo ? (
        educationInfo.map((entry, index) => (
          <div key={index}>
            <p>Institute: {entry.institute}</p>
            <p>Year of Study: {entry.yearOfStudy}</p>
          </div>
        ))
      ) : (
        <p>No education information available</p>
      )}
    </div>
  );
};

export default EducationInfoDisplay;

