import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import CV from './components/CV';
import PersonalForm from './components/PersonalForm';

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

  const onPersonalChange = (e, field) => {
    setPersonal({...personal, [field]: e.target.value})
  }

  return (
    <>
      <div id='form'>
        <PersonalForm 
          personal={personal} 
          handleChange={onPersonalChange}
        />
      </div>
      <CV 
        personal={personal}
        education={education}
      />
    </>
  )
}

export default App
