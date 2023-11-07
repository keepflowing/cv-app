import Input from "./Input"

const generateExInputs = (index, array, onChange, onRemoval) => {
  return (
    <>
      {array.map(item => 
      <Input 
        key={item[0]} 
        id={index+item[0]} 
        label={item[1]}
        type={item[2]}
        placeholder={item[3]}
        onChange={onChange}/>
      )}
      <button id={index+'eduRem'} onClick={onRemoval}>-</button>
    </>
  )
}

const generateExFields = (exInfo, onChange, onRemoval) => {
  return (
    <>
      {exInfo.map((item, index) =>
      <div key={index}>
        {generateExInputs(index, 
        [['title', 'Title', 'text', 'Degree or field of study'], 
        ['company', 'Company', 'text',' School or University'],
        ['sDateW', 'Start date', 'date'],
        ['eDateW', 'End date', 'date'],
        ['desc', 'Description', 'text']]
        , onChange, onRemoval)}
      </div>
      )}
    </>
  )
}

export default function ExperienceForm({experienceInfo, onChange, onRemoval, onAdd}) {
  return (
    <div className='form-section'>
      {generateExFields(experienceInfo, onChange, onRemoval)}
      <button onClick={onAdd}>+</button>
    </div>
  )
}