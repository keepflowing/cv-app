import Input from "./Input"

const generatePersonalInputs = (array, onChange) => {
  return (
    <>
      {array.map(item => 
      <Input 
        key={item[0]} 
        id={item[0]} 
        label={item[1]}
        type='text'
        placeholder={item[2]}
        onChange={onChange}/>)}
    </>
  )
}

export default function PersonalForm({onChange}) {
  return (
  <div className='form-section'>
    <h1>Personal Information:</h1>
    {generatePersonalInputs(
        [['name', 'Full name', 'First and last name'], 
        ['email', 'Email', 'Email address'],
        ['number', 'Phone number', 'Country code and number'],
        ['location', 'Location', 'City (state if applicable)']]
        , onChange)}
  </div>)
}