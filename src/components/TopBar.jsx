import { useState } from "react";
import { RiFontColor } from "react-icons/ri";
import { IoPrintOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { IoPersonAddOutline } from "react-icons/io5";

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
        <RiFontColor/>
        <br></br>
        Font
        {open && <DropDown/>}
      </button>
      <button onClick={window.print}>
        <IoPrintOutline/>
        <br></br>
        Print
      </button>
      <h1>Create CV</h1>
      <button onClick={onReset}>
        <GrPowerReset/>
        <br></br>
        Reset
      </button>
      <button onClick={onExample}>
        <IoPersonAddOutline/>
        <br></br>
        Example
      </button>
    </nav>
  )
}