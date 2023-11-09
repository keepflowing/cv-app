export default function ExperienceForm({item, onChange, experience, setExperience, onDelete}) {
  return (
    <>
      <div className='inputField'>
        <label htmlFor='roleInput'>Role:</label>
        <input 
          name='roleInput' 
          onChange={(e) => onChange(e, experience, setExperience, item.id, 'role')}
          value={item.role}
        ></input>
      </div>
      <div className='inputField'>
        <label htmlFor='companyInput'>Company:</label>
        <input 
          name='companyInput' 
          onChange={(e) => onChange(e, experience, setExperience, item.id, 'company')}
          value={item.company}
        ></input>
      </div>
      <div className='inputField'>
        <label htmlFor='startInput'>Start Date:</label>
        <input 
          type='date'
          name='startInput' 
          onChange={(e) => onChange(e, experience, setExperience, item.id, 'startDate')}
          value={item.startDate}
        ></input>
      </div>
      <div className='inputField'>
       <label htmlFor='endInput'>End Date:</label>
        <input
          type='date'
          name='endInput' 
          onChange={(e) => onChange(e, experience, setExperience, item.id, 'endDate')}
          value={item.endDate}
        ></input>
      </div>
      <div className='inputField'>
        <label htmlFor='descriptionInput'>Description:</label>
        <input 
          name='descriptionInput' 
          onChange={(e) => onChange(e, experience, setExperience, item.id, 'description')}
          value={item.description}
        ></input>
      </div>
      <button onClick={onDelete}>Delete</button>
    </>
  )
}