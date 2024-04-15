import React, { useState } from "react";
import "../../styles/experienceForm.css";

const WorkExperienceInfoInput = ({ workExperienceInfo, handleWorkExperienceSubmit }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    yearStarted: '',
    yearEnded: '',
    description: '', 
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // If editing an entry, update the existing entry
      const updatedWorkExperienceInfo = [...workExperienceInfo];
      updatedWorkExperienceInfo[editingIndex] = formData;
      handleWorkExperienceSubmit(updatedWorkExperienceInfo);
      setEditingIndex(null);
    } else {
      // If not editing, add a new entry
      handleWorkExperienceSubmit([...workExperienceInfo, formData]);
    }

    // Reset the form data
    setFormData({
      jobTitle: '',
      company: '',
      yearStarted: '',
      yearEnded: '',
      description: '',
    });
  };

  const handleEdit = (index) => {
    // Set the form data to the selected entry for editing
    setFormData(workExperienceInfo[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    // Remove the selected entry
    const updatedWorkExperienceInfo = [...workExperienceInfo];
    updatedWorkExperienceInfo.splice(index, 1);
    handleWorkExperienceSubmit(updatedWorkExperienceInfo);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Job Title:</label>
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />

        <label>Company:</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} />

        <label>Year Started:</label>
        <input type="text" name="yearStarted" value={formData.yearStarted} onChange={handleChange} />

        <label>Year Ended:</label>
        <input type="text" name="yearEnded" value={formData.yearEnded} onChange={handleChange} />

        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />

        <button type="submit">{editingIndex !== null ? 'Update' : 'Submit'}</button>
      </form>

      <ul>
        {workExperienceInfo.map((entry, index) => (
          <li key={index}>
            {`${entry.jobTitle} at ${entry.company}`}
            <button type="button" onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperienceInfoInput;
