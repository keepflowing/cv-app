import ExperienceForm from "./ExperienceForm"

export default function GenerateExForms({
  experience, setExperience, onFieldChange, onFieldDelete, onFieldAdd}) {
  return (
    <div className='formSection'>
      <h2>Experience:</h2>
      {experience.map(item => <ExperienceForm
        key={item.id}
        item={item}
        experience={experience}
        setExperience={setExperience}
        onChange={onFieldChange}
        onDelete={() => onFieldDelete(item.id, experience, setExperience)}
      />)}
    <button 
          onClick={onFieldAdd}
        >+</button>
    </div>
  )
}