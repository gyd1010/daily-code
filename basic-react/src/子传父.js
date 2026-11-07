import { useState } from 'react'
function Son({ onGetMsg }) {
  const sonMsg = "this is son msg"
  return (
    <div>
      this is son
      <button onClick={() => onGetMsg(sonMsg)}>Send Message</button>
    </div>
  )
}
function App() {
  const [msg, setMsg] = useState("")
  const getMsg = (msg) => {
    console.log(msg)
    setMsg(msg)
  }
  return (
    <div>
      this is app,{msg}
      <Son onGetMsg={getMsg}></Son>
    </div>
  )
}

export default App;
