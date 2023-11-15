import { useState } from "react";
import { RiFontColor } from "react-icons/ri";
import { IoPrintOutline } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { IoPersonAddOutline } from "react-icons/io5";

const changeFont = (font) => {
  const r = document.querySelector(':root');
  r.style.setProperty('--cv-font', font);
}

const getFont = () => {
  const r = document.querySelector(':root');
  return r.style.getPropertyValue('--cv-font');
}

function DropDown({onLeave}) {
  const [oldFont, setOldFont] = useState(null)
  const [changed, setChanged] = useState(null)
  return (
    <div 
      className="dropDown" 
      onMouseLeave={() => {
        onLeave()
        changed ? setChanged(null) : changeFont(oldFont) 
      }}>
      <a 
        onMouseEnter={() => {
          setOldFont(getFont())
          changeFont('Arial, sans-serif')
          }}
        onMouseLeave={() => changed ? setChanged(null) : changeFont(oldFont) }
        onClick={() => {
          setChanged(1)}}
      >Arial</a>
      <a 
        onMouseEnter={() => {
          setOldFont(getFont())
          changeFont('Comic Sans MS, Comic Sans, cursive')
          }}
        onMouseLeave={() => changed ? setChanged(null) : changeFont(oldFont) }
        onClick={() => {
          setChanged(1)}}
      >Comic Sans</a>
      <a 
        onMouseEnter={() => {
          setOldFont(getFont())
          changeFont('JetBrains Mono')
          }}
        onMouseLeave={() => changed ? setChanged(null) : changeFont(oldFont) }
        onClick={() => {
          setChanged(1)}}
      >JetBrains Mono</a>
      <a 
        onMouseEnter={() => {
          setOldFont(getFont())
          changeFont('Times New Roman, Times, serif')
          }}
        onMouseLeave={() => changed ? setChanged(null) : changeFont(oldFont) }
        onClick={() => {
          setChanged(1)}}
      >Times New Roman</a>
      <a 
        onMouseEnter={() => {
          setOldFont(getFont())
          changeFont('Roboto')
          }}
         onMouseLeave={() => changed ? setChanged(null) : changeFont(oldFont) }
        onClick={() => {
          setChanged(1)}}
      >Roboto</a>
    </div>
  )
}

export default function TopBar({onReset, onExample}) {
  const [open, setOpen] = useState(false)

  return (
    <nav id='topBar'>
      <button type='button' 
        onMouseEnter={() => setOpen(true)}
        >
        <RiFontColor/>
        <br/>
        Font
        {open && <DropDown onLeave={() => setOpen(false)}/>}
      </button>
      <button type='button' onClick={window.print}>
        <IoPrintOutline/>
        <br/>
        Print
      </button>
      <h1>Create CV</h1>
      <button type='button' onClick={onReset}>
        <GrPowerReset/>
        <br/>
        Reset
      </button>
      <button type='button' onClick={onExample}>
        <IoPersonAddOutline/>
        <br/>
        Example
      </button>
    </nav>
  )
}
