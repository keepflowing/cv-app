import ExperienceForm from "./ExperienceForm"
import { SlArrowDown } from "react-icons/sl"
import { SlArrowUp } from "react-icons/sl";

export default function GenerateExForms({
  open, setOpen, experience, setExperience, onFieldChange, onFieldDelete, onFieldAdd}) {
  return (
    <div className='formSection'>
      <h2>Experience:</h2>
      {open === 2 &&
      <>
        {experience.map(item => <ExperienceForm
          key={item.id}
          item={item}
          experience={experience}
          setExperience={setExperience}
          onChange={onFieldChange}
          onDelete={() => onFieldDelete(item.id, experience, setExperience)}
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
      onClick={() => open !== 2 ? setOpen(2) : setOpen(-1)}>
        {open !== 2 ? <SlArrowDown/> : <SlArrowUp/>}
      </button>
    </div>
  )
}