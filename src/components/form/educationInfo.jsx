import React, { useState } from "react";
import "../../styles/educationForm.css";

const EducationInfoInput = ({ educationInfo, handleEducationInfoSubmit }) => {
  const [formData, setFormData] = useState({
    institute: '',
    yearOfStudy: '',
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
      const updatedEducationInfo = [...educationInfo];
      updatedEducationInfo[editingIndex] = formData;
      handleEducationInfoSubmit(updatedEducationInfo);
      setEditingIndex(null);
    } else {
      // If not editing, add a new entry
      handleEducationInfoSubmit([...educationInfo, formData]);
    }

    // Reset the form data
    setFormData({
      institute: '',
      yearOfStudy: '',
    });
  };

  const handleEdit = (index) => {
    // Set the form data to the selected entry for editing
    setFormData(educationInfo[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    // Remove the selected entry
    const updatedEducationInfo = [...educationInfo];
    updatedEducationInfo.splice(index, 1);
    handleEducationInfoSubmit(updatedEducationInfo);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Institute:</label>
        <input type="text" name="institute" value={formData.institute} onChange={handleChange} />

        <label>Year of Study:</label>
        <input type="text" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleChange} />

        <button type="submit">{editingIndex !== null ? 'Update' : 'Submit'}</button>
      </form>

      <ul>
        {educationInfo.map((entry, index) => (
          <li key={index}>
            {entry.institute}
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

export default EducationInfoInput;

