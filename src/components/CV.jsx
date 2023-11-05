export default function CV ({cv}) {
  return (
    <>
      <div>
        <h2>Name: {cv.name}</h2>
        <h2>Email: {cv.email}</h2>
        <h2>Phone number: {cv.number}</h2>
        <h2>Location: {cv.location}</h2>
      </div>
      <div>
        <h2>Degree: {cv.degree}</h2>
        <h2>School: {cv.school}</h2>
        <h2>Start date: {cv.sDate}</h2>
        <h2>End date: {cv.eDate}</h2>
      </div>
    </>
  )
}