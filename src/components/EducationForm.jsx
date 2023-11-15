import { FaRegTrashAlt } from 'react-icons/fa'

export default function EducationForm({
  open, setOpen, item, onChange, education, setEducation, onDelete}) {
  return (
    <>
    {open === item.id ?
    <div className='formFlex'>
      <div>
        <div className='inputField'>
          <label htmlFor={`${item.id}t`}>Title:</label>
          <input 
            id={`${item.id}t`}
            onChange={(e) => onChange(e, education, setEducation, item.id, 'title')}
            value={item.title}
          />
        </div>
        <div className='inputField'>
          <label htmlFor={`${item.id}sc`}>School:</label>
          <input 
            id={`${item.id}sc`}
            onChange={(e) => onChange(e, education, setEducation, item.id, 'school')}
            value={item.school}
          />
        </div>
        <div className='inputField'>
          <label htmlFor={`${item.id}sd`}>Start Date:</label>
          <input 
            id={`${item.id}sd`}
            type='date'
            onChange={(e) => onChange(e, education, setEducation, item.id, 'startDate')}
            value={item.startDate}
          />
        </div>
        <div className='inputField'>
        <label htmlFor={`${item.id}e`}>End Date:</label>
          <input
            id={`${item.id}`}
            type='date'
            onChange={(e) => onChange(e, education, setEducation, item.id, 'endDate')}
            value={item.endDate}
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
        {item.title ? item.title : 'Untitled'}
        </button>
        <br/>
      </>}
    </>
  )
}
