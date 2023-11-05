import { useState } from 'react'
import './styles/App.css'

function App() {
  const [personalForm, setPersonalForm] = useState(true)

  return (
    <>
      {personalForm && <h1>Hello World</h1>}
    </>
  )
}

export default App
