import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import CV from './components/CV';
import PersonalForm from './components/PersonalForm';
import GenerateEduForms from './components/GenerateEduForms';
import GenerateExForms from './components/GenerateExForms';

function App() {
  const [personal, setPersonal] = useState({
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    number: '555-555-555',
    location: 'Mars, The Solar System'
  })
  const [education, setEducation] = useState([
    {
      id: uuidv4(),
      title: 'Full Stack Web-Dev',
      school: 'The Odin Project',
      startDate: '2023-07-12',
      endDate: '-'
    }
  ])
  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      role: 'Full Stack Developer',
      company: 'Google',
      startDate: '2023-12-31',
      endDate: '-',
      description: ''
    }
  ])

  const onPersonalChange = (e, field) => {
    setPersonal({...personal, [field]: e.target.value})
  }
  
  const onFieldChange = (e, category, setCategory, id, field) => {
    setCategory(category.map(item => {
      if (item.id === id) {
        return {...item, [field]: e.target.value}
      } else {
        return item
      }
    }))
  }

  const onFieldAdd = (category, setCategory, type = null) => {
    let item = {}
    if (type === 'education') {
      item = {
        id: uuidv4(),
        title: '',
        school: '',
        startDate: '',
        endDate: ''
      }
    } else {
      item = {
        id: uuidv4(),
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    }
    setCategory([...category, item])
  }

  const onFieldDelete = (id, field, setField) => {
    setField(field.filter(item => item.id !== id))
  }

  return (
    <>
      <div id='form'>
        <PersonalForm 
          personal={personal} 
          handleChange={onPersonalChange}
        />
        <GenerateEduForms 
          education={education} 
          setEducation={setEducation}
          onFieldChange={onFieldChange}
          onFieldDelete={onFieldDelete}
        />
        <GenerateExForms 
          experience={experience} 
          setExperience={setExperience}
          onFieldChange={onFieldChange}
          onFieldDelete={onFieldDelete}
        />
        <button 
          onClick={() => onFieldAdd(experience, setExperience, 'work')}
        >+</button>
      </div>
      <CV 
        personal={personal}
        education={education}
        experience={experience}
      />
    </>
  )
}

export default App
