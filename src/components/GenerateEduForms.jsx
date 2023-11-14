import EducationForm from "./EducationForm";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

export default function GenerateEduForms({
  open, setOpen, education, setEducation, onFieldChange, onFieldDelete, onFieldAdd}) {
  return (
    <div className='formSection'>
      <h2>Education:</h2>
      {open === 1 &&
      <>
        {education.map(item => <EducationForm
          key={item.id}
          item={item}
          education={education}
          setEducation={setEducation}
          onChange={onFieldChange}
          onDelete={() => onFieldDelete(item.id, education, setEducation)}
        />)}
        <button 
        className='edit'
        onClick={onFieldAdd}
        >
          +
        </button>
        <br></br>
      </>}
      <button 
        className='expand'
        onClick={() => open !== 1 ? setOpen(1) : setOpen(-1)}>
          {open !== 1 ? <SlArrowDown/> : <SlArrowUp/>}
        </button>
    </div>
  )
}