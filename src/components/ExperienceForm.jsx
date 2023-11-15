import { FaRegTrashAlt } from "react-icons/fa"

export default function ExperienceForm({
  open, setOpen, item, onChange, experience, setExperience, onDelete}) {
  return (
    <>
    {open === item.id ?
    <div className='formFlex'>
      <div>
        <div className='inputField'>
          <label htmlFor={`${item.id}c`}>Company:</label>
          <input 
            id={`${item.id}c`} 
            onChange={(e) => onChange(e, experience, setExperience, item.id, 'company')}
            value={item.company}
          />
        </div>
        <div className='inputField'>
          <label htmlFor={`${item.id}r`}>Role:</label>
          <input 
            id={`${item.id}r`}
            onChange={(e) => onChange(e, experience, setExperience, item.id, 'role')}
            value={item.role}
          />
        </div>
        <div className='inputField'>
          <label htmlFor={`${item.id}s`}>Start Date:</label>
          <input 
            id={`${item.id}s`}
            type='date'
            onChange={(e) => onChange(e, experience, setExperience, item.id, 'startDate')}
            value={item.startDate}
          />
        </div>
        <div className='inputField'>
        <label htmlFor={`${item.id}e`}>End Date:</label>
          <input
            id={`${item.id}e`}
            type='date'
            onChange={(e) => onChange(e, experience, setExperience, item.id, 'endDate')}
            value={item.endDate}
          />
        </div>
        <div className='inputField'>
          <label htmlFor={`${item.id}d`}>Description:</label>
          <input 
            id={`${item.id}d`}
            onChange={(e) => onChange(e, experience, setExperience, item.id, 'description')}
            value={item.description}
          />
        </div>
      </div>
      <button type='button' 
        className='red'
        onClick={onDelete}>
        <FaRegTrashAlt/>
      </button>
    </div> : 
      <>
        <button type='button' onClick={() => setOpen(item.id)}>
        {item.company ? item.company : 'Untitled'}
        </button>
        <br/>
      </>}
    </>
  )
}
