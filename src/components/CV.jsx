function EducationField({item}) {
  return (
    <div>
      <p>ID: {item.id}</p>
      <p>Title: {item.title}</p>
      <p>School: {item.school}</p>
      <p>Start Date: {item.startDate}</p>
      <p>End Date: {item.endDate}</p>
    </div>
  )
}

function ExperienceField({item}) {
  return (
    <div>
      <p>ID: {item.id}</p>
      <p>Role: {item.role}</p>
      <p>Company: {item.company}</p>
      <p>Start Date: {item.startDate}</p>
      <p>End Date: {item.endDate}</p>
      <p>Description: {item.description}</p>
    </div>
  )
}

export default function CV ({personal, education, experience}) {
  return (
    <div id='cv'>
      <h1>{personal.name}</h1>
      <div className='contact'>
        <p>{personal.email}</p>
        <p>{personal.number}</p>
        <p>{personal.location}</p>
      </div>
      <h2>Education</h2>
      {education.map(item => <EducationField key={item.id} item={item}/>)}
      <h2>Experience</h2>
      {experience.map(item => <ExperienceField key={item.id} item={item}/>)}
    </div>
  )
}