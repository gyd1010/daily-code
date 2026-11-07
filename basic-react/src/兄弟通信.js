import { useState } from 'react'
function A({ onGetMsg }) {
  const sonMsg = "this is A"
  return (
    <div>
      this is A
      <button onClick={() => onGetMsg(sonMsg)}>Send Message</button>
    </div>
  )
}
function B({ name }) {
  return (
    <div>
      this is B, {name}
    </div>
  )
}
function App() {
  const [name, setName] = useState("")
  const getMsg = (name) => {
    console.log(name)
    setName(name)
  }
  return (
    <div>
      this is app
      <A onGetMsg={getMsg}></A>
      <B name={name}></B>
    </div>
  )
}

export default App;