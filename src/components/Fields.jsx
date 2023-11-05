function Input ({id, onChange}) {
  return (
    <input id={id} placeholder={id} onChange={onChange}></input>
  )
}

const generateInputs = (title, array, onChange) => {
  return (
    <div>
      <h2>{title}</h2>
      {array.map(item => 
      <Input key={item} id={item} onChange={onChange}/>)}
    </div>
  )
}

export default function Fields ({onChange}) {
  return (
  <div>
    {generateInputs(
      'Personal:', 
      ['name', 
      'title'], onChange)}
    {generateInputs(
      'Experience:', 
      ['work', 
      'studies'], onChange)}
  </div>
  )
}