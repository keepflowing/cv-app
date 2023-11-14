import { useState } from "react";

const changeFont = () => {
  const r = document.querySelector(':root');
  r.style.setProperty('--cv-font', 'Arial');
}

function DropDown() {
  return (
    <div className="dropDown">
      <p>Hello World</p>
    </div>
  )
}

export default function TopBar({onReset, onExample}) {
  const [open, setOpen] = useState(false)

  return (
    <nav id='topBar'>
      <button onClick={() => setOpen(!open)}>Font</button>
      {open && <DropDown/>}
      <button onClick={window.print}>Print</button>
      <h1>Create CV</h1>
      <button onClick={onReset}>Reset</button>
      <button onClick={onExample}>Example</button>
    </nav>
  )
}