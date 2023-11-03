export default function Fields ({onChange}) {
  return (
  <div>
    <input id='name' onChange={onChange}></input>
    <input id='title' onChange={onChange}></input>
  </div>
  )
}