export default function CV ({personal, education}) {
  return (
    <div id='cv'>
      <h1>{personal.name}</h1>
      <div className='contact'>
        <p>{personal.email}</p>
        <p>{personal.number}</p>
        <p>{personal.location}</p>
      </div>
    </div>
  )
}