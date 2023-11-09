export default function EducationForm({item, onChange, education, setEducation, onDelete}) {
  return (
    <>
      <div className='inputField'>
        <label htmlFor={item.id+'t'}>Title:</label>
        <input 
          id={item.id+'t'}
          onChange={(e) => onChange(e, education, setEducation, item.id, 'title')}
          value={item.title}
        ></input>
      </div>
      <div className='inputField'>
        <label htmlFor={item.id+'sc'}>School:</label>
        <input 
          id={item.id+'sc'}
          onChange={(e) => onChange(e, education, setEducation, item.id, 'school')}
          value={item.school}
        ></input>
      </div>
      <div className='inputField'>
        <label htmlFor={item.id+'sd'}>Start Date:</label>
        <input 
          id={item.id+'sd'}
          name='startInput' 
          onChange={(e) => onChange(e, education, setEducation, item.id, 'startDate')}
          value={item.startDate}
        ></input>
      </div>
      <div className='inputField'>
       <label htmlFor={item.id+'e'}>End Date:</label>
        <input
          id={item.id+'e'}
          name='endInput' 
          onChange={(e) => onChange(e, education, setEducation, item.id, 'endDate')}
          value={item.endDate}
        ></input>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  )
}