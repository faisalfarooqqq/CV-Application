import React from 'react';
import "../../styles/experienceDisplay.css";

const WorkExperienceInfoDisplay = ({ workExperienceInfo }) => {
  return (
    <div className='container'>
      <h3>Experience</h3>
      {workExperienceInfo && workExperienceInfo.length > 0 ? (
        workExperienceInfo.map((entry, index) => (
          <div key={index}>
            <p>Job Title: {entry.jobTitle}</p>
            <p>Company: {entry.company}</p>
            <p>Year Started: {entry.yearStarted}</p>
            <p>Year Ended: {entry.yearEnded}</p>
            {entry.description && <p>Description: {entry.description}</p>}
          </div>
        ))
      ) : (
        <p>No work experience information available</p>
      )}
    </div>
  );
};

export default WorkExperienceInfoDisplay;

