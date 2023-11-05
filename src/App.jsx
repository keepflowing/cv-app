import { useState } from 'react'
import Fields from './components/Fields'
import CV from './components/CV'
import './styles/App.css'

function App() {
  const [cv, setCv] = useState({});

  function handleChange(e) {
    setCv({...cv, [e.target.id]: e.target.value});
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
