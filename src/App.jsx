import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import examplePerson from './components/examplePerson'

import CV from './components/CV'
import TopBar from './components/TopBar'
import PersonalForm from './components/PersonalForm'
import GenerateEduForms from './components/GenerateEduForms'
import GenerateExForms from './components/GenerateExForms'

const example = examplePerson()

function App() { 
  const [personal, setPersonal] = useState(example.personal)
  const [education, setEducation] = useState([example.education])
  const [experience, setExperience] = useState([example.experience])
  const [openForm, setOpenForm] = useState(0)

  const formReset = () => {
    setPersonal({name: '', email: '', number: '', location: ''})
    setEducation([])
    setExperience([])
  }

  const formExample = () => {
    setPersonal(example.personal)
    setEducation([example.education])
    setExperience([example.experience])
  }

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
    return item.id
  }

  const onFieldDelete = (id, field, setField) => {
    setField(field.filter(item => item.id !== id))
  }

  return (
    <>
      <TopBar
        onReset={formReset}
        onExample={formExample}
      />
      <div id='container'>
        <div id='form'>
          <PersonalForm 
            open={openForm}
            setOpen={setOpenForm}
            personal={personal} 
            handleChange={onPersonalChange}
          />
          <GenerateEduForms 
            open={openForm}
            setOpen={setOpenForm}
            education={education} 
            setEducation={setEducation}
            onFieldChange={onFieldChange}
            onFieldDelete={onFieldDelete}
            onFieldAdd={() => onFieldAdd(education, setEducation, 'education')}
          />
          <GenerateExForms 
            open={openForm}
            setOpen={setOpenForm}
            experience={experience} 
            setExperience={setExperience}
            onFieldChange={onFieldChange}
            onFieldDelete={onFieldDelete}
            onFieldAdd={() => onFieldAdd(experience, setExperience, 'work')}
          />
        </div>
        <CV 
          personal={personal}
          education={education}
          experience={experience}
        />
      </div>
    </>
  )
}

export default App
