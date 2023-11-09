export default function EducationForm({item, onChange, education, setEducation, onDelete}) {
  return (
    <>
      <div className='inputField'>
        <label htmlFor='titleInput'>Title:</label>
        <input 
          name='titleInput' 
          onChange={(e) => onChange(e, education, setEducation, item.id, 'title')}
          value={item.title}
        ></input>
      </div>
      <div className='inputField'>
        <label htmlFor='schoolInput'>School:</label>
        <input 
          name='schoolInput' 
          onChange={(e) => onChange(e, education, setEducation, item.id, 'school')}
          value={item.school}
        ></input>
      </div>
      <div className='inputField'>
        <label htmlFor='startInput'>Start Date:</label>
        <input 
          type='date'
          name='startInput' 
          onChange={(e) => onChange(e, education, setEducation, item.id, 'startDate')}
          value={item.startDate}
        ></input>
      </div>
      <div className='inputField'>
       <label htmlFor='endInput'>End Date:</label>
        <input
          type='date'
          name='endInput' 
          onChange={(e) => onChange(e, education, setEducation, item.id, 'endDate')}
          value={item.endDate}
        ></input>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  )
}