export default function PersonalForm({personal, handleChange}) {
  return (
    <div className='formSection'>
      <h2>Personal Information:</h2>
      <div className='inputField'>
        <label htmlFor='nameInput'>Full Name:</label>
        <input 
          id='nameInput' 
          onChange={(e) => handleChange(e, 'name')}
          value={personal.name}
        ></input>
      </div>
      <div className='inputField'>
        <label htmlFor='emailInput'>Email:</label>
        <input 
          id='emailInput' 
          onChange={(e) => handleChange(e, 'email')}
          value={personal.email}
        ></input>
      </div>
      <div className='inputField'>
        <label htmlFor='numberInput'>Phone number:</label>
        <input 
          id='numberInput' 
          onChange={(e) => handleChange(e, 'number')}
          value={personal.number}
        ></input>
      </div>
      <div className='inputField'>
        <label htmlFor='locationInput'>Location:</label>
        <input 
          id='locationInput' 
          onChange={(e) => handleChange(e, 'location')}
          value={personal.location}
        ></input>
      </div>
    </div>
  )
}