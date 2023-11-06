export default function Input ({id, label, type, placeholder, onChange}) {
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