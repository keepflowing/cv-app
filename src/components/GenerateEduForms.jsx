import EducationForm from "./EducationForm";

export default function GenerateEduForms({
  education, setEducation, onFieldChange, onFieldDelete, onFieldAdd}) {
  return (
    <div className='formSection'>
      <h2>Education:</h2>
      {education.map(item => <EducationForm
        key={item.id}
        item={item}
        education={education}
        setEducation={setEducation}
        onChange={onFieldChange}
        onDelete={() => onFieldDelete(item.id, education, setEducation)}
      />)}
      <button 
        onClick={onFieldAdd}
      >+</button>
    </div>
  )
}