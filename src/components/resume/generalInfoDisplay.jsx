import "../../styles/generalDisplay.css";

const GeneralInfoDisplay = ({ fullName, email, address, phone }) => {
  return (
    <div className="container">
      
      <p>Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default GeneralInfoDisplay;
