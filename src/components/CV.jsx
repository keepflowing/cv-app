const Field = ({index, first, fName, second, sName, sDate, eDate, desc = null}) => {
  return (
    <div>
      <h3>{index}.</h3>
      <p>{fName}: {first}</p>
      <p>{sName}: {second}</p>
      <p>Start date: {sDate}</p>
      <p>End date: {eDate}</p>
      <p>{desc}</p>
    </div>
  )
}

const generateEduField = (obj) => {
  return (
    <>
      {obj.map((field,index) => 
      <Field
        key={index}
        index={index+1}
        first={field.degree}
        fName='Degree'
        second={field.school}
        sName='School'
        sDate={field.sDate}
        eDate={field.eDate}
      />)}
    </>
  )
}

const generateExField = (obj) => {
  return (
    <>
      {obj.map((field,index) => 
      <Field
        key={index}
        index={index+1}
        first={field.title}
        fName='Title'
        second={field.company}
        sName='Company'
        sDateW={field.sDate}
        eDateW={field.eDate}
        desc={field.desc}
      />)}
    </>
  )
}

export default function CV({
  personalInfo, educationInfo, experienceInfo}) {
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
    <div>
      <h1>Experience:</h1>
      {generateExField(experienceInfo)}
    </div>
    </div>
  )
}