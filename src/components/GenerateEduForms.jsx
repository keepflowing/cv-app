import EducationForm from "./EducationForm";
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

export default function GenerateEduForms({
  open, setOpen, education, setEducation, onFieldChange, onFieldDelete, onFieldAdd}) {
  let id = 0;
  if(education[0] !== undefined) id = education[0].id;
  const [openForm, setOpenForm] = useState(id)
  return (
    <div className='formSection'>
      <h2>Education:</h2>
      {open === 1 &&
      <>
        {education.map(item => <EducationForm
          open={openForm}
          setOpen={setOpenForm}
          key={item.id}
          item={item}
          education={education}
          setEducation={setEducation}
          onChange={onFieldChange}
          onDelete={() => onFieldDelete(item.id, education, setEducation)}
        />)}
        <button 
        className='edit'
        onClick={() => setOpenForm(onFieldAdd())}
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