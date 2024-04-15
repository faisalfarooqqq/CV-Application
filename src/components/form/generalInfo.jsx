import { useState } from "react";
import "../../styles/generalForm.css";

const GeneralInfoInput = ({ generalInfo, handleGeneralInfoSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGeneralInfoSubmit(formData);
    setFormData({
        fullName: '',
        email: '',
        address: '',
        phone: '',
    });
  };

  const handleEdit = () => {
    setFormData(generalInfo);

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default GeneralInfoInput;

