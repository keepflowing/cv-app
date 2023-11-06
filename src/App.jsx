import { useState } from 'react'
import CV from './components/CV';
import PersonalForm from './components/PersonalForm';
import EducationForm from './components/EducationForm';
import './styles/App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState({})
  const [educationInfo, setEducationInfo] = useState([{}, {}, {}])
  // const [isOpen, setIsOpen] = useState(null);
  
  const personalInfoChange = (e) => {
    setPersonalInfo(
      {...personalInfo, [e.target.id]: e.target.value});
  }

  const educationInfoChange = (e) => {
    const index = parseInt(e.target.id)
    const id = e.target.id.replace(/[0-9]/g, '');
    educationInfo[index][id] = e.target.value;
    setEducationInfo([...educationInfo])
  }

  const educationFieldRemoval = (e) => {
    const id = parseInt(e.target.id)
    educationInfo.splice(id, 1)
    setEducationInfo([...educationInfo])
  }

  const educationFieldAddition = () => {
    educationInfo.push({})
    setEducationInfo([...educationInfo])
  }

  return (
    <>
      <PersonalForm
        onChange={personalInfoChange}
      />
      <EducationForm
        educationInfo={educationInfo}
        onChange={educationInfoChange}
        onRemoval={educationFieldRemoval}
        onAdd={educationFieldAddition}
      />
      <CV
        personalInfo={personalInfo}
        educationInfo={educationInfo}
      />
    </>
  )
}

export default App
