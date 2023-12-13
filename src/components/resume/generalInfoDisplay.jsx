const GeneralInfoDisplay = ({ fullName, email, address, phone }) => {
  return (
    <div>
      <h3>General Information</h3>
      <p>Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

export default GeneralInfoDisplay;
