function Input ({id, label, placeholder, onChange}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
        id={id} 
        placeholder={placeholder} 
        onChange={onChange}>
      </input>
    </>
  )
}

const generateInputs = (title, array, onChange) => {
  return (
    <div>
      <h2>{title}</h2>
      {array.map(item => 
      <Input 
        key={item[0]} 
        id={item[0]} 
        label={item[1]}
        placeholder={item[2]}
        onChange={onChange}/>)}
    </div>
  )
}

export default function Fields ({onChange}) {
  return (
  <div>
    {generateInputs(
      'Personal Details', [
        ['name', 'Full name', 'First and last name'], 
        ['email', 'Email', 'Email address']]
        , onChange)}
        {generateInputs(
      'Education', [
        ['degree', 'Degree', 'Degree or field of study'], 
        ['school', 'School', 'School or University']]
        , onChange)}
  </div>
  )
}