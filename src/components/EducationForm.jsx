import Input from "./Input"

const generateEducationInputs = (index, array, onChange, onRemoval) => {
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

const generateEducationFields = (educationInfo, onChange, onRemoval) => {
  return (
    <>
      {educationInfo.map((item, index) =>
      <div key={index}>
        {generateEducationInputs(index, 
        [['degree', 'Degree', 'text', 'Degree or field of study'], 
        ['school', 'School', 'text',' School or University'],
        ['sDate', 'Start date', 'date'],
        ['eDate', 'End date', 'date']]
        , onChange, onRemoval)}
      </div>
      )}
    </>
  )
}

export default function EducationForm({educationInfo, onChange, onRemoval, onAdd}) {
  return (
    <div className='form-section'>
      {generateEducationFields(educationInfo, onChange, onRemoval)}
      <button onClick={onAdd}>+</button>
    </div>
  )
}