import { useState } from 'react'
import Fields from './components/Fields'
import CV from './components/CV'
import './styles/App.css'

function App() {
  const [cv, setCv] = useState({name: "carl"});

  function handleChange(e) {
    const currCv = {...cv}
    const field = e.target.id;
    currCv[field] = e.target.value;
    setCv(currCv);
  }

  return (
    <>
      <Fields 
        cv={cv}
        onChange={handleChange}
      />
      <CV 
        cv={cv}
      />
    </>
  )
}

export default App
