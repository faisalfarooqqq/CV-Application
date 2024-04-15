import { useState } from 'react';
import './App.css'
import GeneralInfoInput from './components/form/generalInfo';
import GeneralInfoDisplay from './components/resume/generalInfoDisplay';
import EducationInfoInput from './components/form/educationInfo';
import EducationInfoDisplay from './components/resume/educationInfoDisplay';
import WorkExperienceInfoInput from './components/form/experienceInfo';
import WorkExperienceInfoDisplay from './components/resume/experienceDisplay';


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

  const [educationInfo, setEducationInfo] = useState([]);

  const handleEducationInfoSubmit = (data) => {
    setEducationInfo(data);
  };

  const [workExperienceInfo, setWorkExperienceInfo] = useState([]);
  
  const handleWorkExperienceSubmit = (data) => {
    setWorkExperienceInfo(data);
  };


  return (
  <div className='wrapper'>
    <div className='header'><h1>CV Application</h1></div>
    <div className='formContainer'>
      <GeneralInfoInput generalInfo={generalInfo} handleGeneralInfoSubmit={handleGeneralInfoSubmit}/>
      <EducationInfoInput educationInfo={educationInfo} handleEducationInfoSubmit={handleEducationInfoSubmit}/>
      <WorkExperienceInfoInput workExperienceInfo={workExperienceInfo} handleWorkExperienceSubmit={handleWorkExperienceSubmit} />
    </div>
    <div className='resumeContainer'>
      <GeneralInfoDisplay {...generalInfo} />
      <EducationInfoDisplay educationInfo={educationInfo} />
      <WorkExperienceInfoDisplay workExperienceInfo={workExperienceInfo} />
    </div>

  </div>
  )
}

export default App;
