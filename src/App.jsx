import { useState } from 'react';
import './App.css'
import GeneralInfoInput from './components/form/generalInfo';
import GeneralInfoDisplay from './components/resume/generalInfoDisplay';


function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: '',
    email: '', 
    address: '',
    phone: '',
  });

  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfo(data);
  };

  return (
  <div className='wrapper'>
    <div className='header'><h1>CV Application</h1></div>
    <div className='formContainer'>
      <GeneralInfoInput generalInfo={generalInfo} handleGeneralInfoSubmit={handleGeneralInfoSubmit}/>
    </div>
    <div className='resumeContainer'>
      <GeneralInfoDisplay {...generalInfo} />
    </div>

  </div>
  )
}

export default App;
