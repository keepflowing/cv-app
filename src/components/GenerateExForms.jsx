import ExperienceForm from "./ExperienceForm"

export default function GenerateExForms({experience, setExperience, onFieldChange, onFieldDelete}) {
  return (
    <>
      <h2>Experience:</h2>
      {experience.map(item => <ExperienceForm
        key={item.id}
        item={item}
        experience={experience}
        setExperience={setExperience}
        onChange={onFieldChange}
        onDelete={() => onFieldDelete(item.id, experience, setExperience)}
      />)}
    </>
  )
}