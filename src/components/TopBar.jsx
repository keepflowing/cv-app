export default function TopBar({onReset, onExample}) {
  return (
    <nav id='topBar'>
      <button>Font</button>
      <button onClick={window.print}>Print</button>
      <h1>Create CV</h1>
      <button onClick={onReset}>Reset</button>
      <button onClick={onExample}>Example</button>
    </nav>
  )
}