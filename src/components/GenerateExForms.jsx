import ExperienceForm from "./ExperienceForm"
import { useState } from "react";
import { SlArrowDown } from "react-icons/sl"
import { SlArrowUp } from "react-icons/sl";

export default function GenerateExForms({
  open, setOpen, experience, setExperience, onFieldChange, onFieldDelete, onFieldAdd}) {
    let id = 0;
    if(experience[0] !== undefined) id = experience[0].id;
    const [openForm, setOpenForm] = useState(id)
    return (
    <div className='formSection'>
      <h2>Experience:</h2>
      {open === 2 &&
      <>
        {experience.map(item => <ExperienceForm
          open={openForm}
          setOpen={setOpenForm}
          key={item.id}
          item={item}
          experience={experience}
          setExperience={setExperience}
          onChange={onFieldChange}
          onDelete={() => onFieldDelete(item.id, experience, setExperience)}
        />)}
        <button 
          onClick={() => setOpenForm(onFieldAdd())}
        >
          +
        </button>
        <br></br>
      </>}
    <button 
      className='expand'
      onClick={() => open !== 2 ? setOpen(2) : setOpen(-1)}>
        {open !== 2 ? <SlArrowDown/> : <SlArrowUp/>}
      </button>
    </div>
  )
}