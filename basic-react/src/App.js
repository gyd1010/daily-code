import { useRef } from 'react'

function App() {
  const showDom = () => {
    console.dir(inputRef.current)
  }
  const inputRef = useRef(null)
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>Focus Input</button>
    </div>
  )
}

export default App;
