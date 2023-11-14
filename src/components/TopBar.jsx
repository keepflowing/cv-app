import { useState } from "react";

const changeFont = (font) => {
  const r = document.querySelector(':root');
  r.style.setProperty('--cv-font', font);
}

function DropDown() {
  return (
    <div className="dropDown">
      <a onClick={() => changeFont('Arial, sans-serif')}>Arial</a>
      <a onClick={() => changeFont('Comic Sans MS, Comic Sans, cursive')}>Comic Sans</a>
      <a onClick={() => changeFont('JetBrains Mono')}>JetBrains Mono</a>
      <a onClick={() => changeFont('Times New Roman, Times, serif')}>Times New Roman</a>
      <a onClick={() => changeFont('Roboto')}>Roboto</a>
    </div>
  )
}

export default function TopBar({onReset, onExample}) {
  const [open, setOpen] = useState(false)

  return (
    <nav id='topBar'>
      <button onClick={() => setOpen(!open)}>
        Font
        {open && <DropDown/>}
      </button>
      <button onClick={window.print}>Print</button>
      <h1>Create CV</h1>
      <button onClick={onReset}>Reset</button>
      <button onClick={onExample}>Example</button>
    </nav>
  )
}