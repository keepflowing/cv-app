const Field = ({index, degree, school, sDate, eDate}) => {
  return (
    <div>
      <h3>{index}.</h3>
      <p>Degree: {degree}</p>
      <p>School: {school}</p>
      <p>Start date: {sDate}</p>
      <p>End date: {eDate}</p>
    </div>
  )
}

const generateEduField = (obj) => {
  return (
    <>
      {obj.map((field,index) => 
      <Field
        key={Math.random()}
        index={index+1}
        degree={field.degree}
        school={field.school}
        sDate={field.sDate}
        eDate={field.eDate}
      />)}
    </>
  )
}

export default function CV({
  personalInfo, educationInfo}) {
  return (
    <div className="cv">
      <div>
      <h1>Personal Information:</h1>
      <p>Name: {personalInfo.name}</p>
      <p>Email: {personalInfo.email}</p>
      <p>Number: {personalInfo.number}</p>
      <p>Location: {personalInfo.location}</p>
    </div>
    <div>
      <h1>Education:</h1>
      {generateEduField(educationInfo)}
    </div>
    </div>
  )
}