import { useState } from 'react'
import CV from './components/CV';
import PersonalForm from './components/PersonalForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';

function App() {
  const [personalInfo, setPersonalInfo] = useState({})
  const [educationInfo, setEducationInfo] = useState([{}])
  const [experienceInfo, setExperienceInfo] = useState([{}])
  // const [isOpen, setIsOpen] = useState(null);
  
  const personalInfoChange = (e) => {
    setPersonalInfo(
      {...personalInfo, [e.target.id]: e.target.value});
  }

  const educationInfoChange = (e) => {
    const index = parseInt(e.target.id)
    const id = e.target.id.replace(/[0-9]/g, '')
    educationInfo[index][id] = e.target.value
    setEducationInfo([...educationInfo])
  }

  const educationFieldRemoval = (e) => {
    const id = parseInt(e.target.id)
    educationInfo.splice(id, 1)
    for (let i = 0; i < educationInfo.length; i++) {
      document.getElementById(`${i}degree`).value = 
        educationInfo[i].degree ? educationInfo[i].degree : ''
      document.getElementById(`${i}school`).value = 
        educationInfo[i].school ? educationInfo[i].school : ''
      document.getElementById(`${i}sDate`).value = 
        educationInfo[i].sDate ? educationInfo[i].sDate : ''
      document.getElementById(`${i}eDate`).value = 
        educationInfo[i].eDate ? educationInfo[i].eDate : ''
    }
    setEducationInfo([...educationInfo])
  }

  const educationFieldAddition = () => {
    educationInfo.push({})
    setEducationInfo([...educationInfo])
  }

  const experienceInfoChange = (e) => {
    const index = parseInt(e.target.id)
    const id = e.target.id.replace(/[0-9]/g, '')
    experienceInfo[index][id] = e.target.value
    setExperienceInfo([...experienceInfo])
  }

  const experienceFieldRemoval = (e) => {
    const id = parseInt(e.target.id)
    experienceInfo.splice(id, 1)
    for (let i = 0; i < experienceInfo.length; i++) {
      document.getElementById(`${i}title`).value = 
        experienceInfo[i].title ? experienceInfo[i].title : ''
      document.getElementById(`${i}company`).value = 
       experienceInfo[i].title ? experienceInfo[i].title : ''
      document.getElementById(`${i}sDateW`).value = 
      experienceInfo[i].sDateW ? experienceInfo[i].sDateW : ''
      document.getElementById(`${i}eDateW`).value = 
      experienceInfo[i].eDateW ? experienceInfo[i].eDateW : ''
      document.getElementById(`${i}desc`).value = 
      experienceInfo[i].desc ? experienceInfo[i].desc : ''
    }
    setExperienceInfo([...experienceInfo])
  }

  const experienceFieldAddition = () => {
    experienceInfo.push({})
    setExperienceInfo([...experienceInfo])
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
      <ExperienceForm
        experienceInfo={experienceInfo}
        onChange={experienceInfoChange}
        onRemoval={experienceFieldRemoval}
        onAdd={experienceFieldAddition}
      />
      <CV
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />
    </>
  )
}

export default App
