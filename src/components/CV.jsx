export default function CV ({cv}) {
  return (
    <>
      <div>
        <h2>Name: {cv.name}</h2>
        <h2>Title: {cv.title}</h2>
      </div>
      <div>
        <h2>Work: {cv.work}</h2>
        <h2>Studies: {cv.studies}</h2>
      </div>
    </>
  )
}