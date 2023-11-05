function Input ({id, label, type, placeholder, onChange}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
        id={id} 
        type={type}
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
        type={item[2]}
        placeholder={item[3]}
        onChange={onChange}/>)}
    </div>
  )
}

export default function Fields ({onChange}) {
  return (
  <div>
    {generateInputs(
      'Personal Details', [
        ['name', 'Full name', 'text', 'First and last name'], 
        ['email', 'Email', 'email', 'Email address'],
        ['number', 'Phone number', 'number', 'Country code and number'],
        ['location', 'Location', 'text', 'City (state if applicable)']]
        , onChange)}
        {generateInputs(
      'Education', [
        ['degree', 'Degree', 'text', 'Degree or field of study'], 
        ['school', 'School', 'text', 'School or University'],
        ['sDate', 'Start date', 'date'], 
        ['eDate', 'End date', 'date']]
        , onChange)}
  </div>
  )
}