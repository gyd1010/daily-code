import { createContext, useContext } from 'react'
const MsgContext = createContext()
function A() {
  return (
    <div>
      this is A
    </div>
  )
}
function B() {
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B, {msg}
    </div>
  )
}
function App() {
  const msg = 'this is a message'
  return (
    <div>
      <MsgContext.Provider value={msg}>
        this is app
        <A />
        <B />
      </MsgContext.Provider>
    </div>
  )
}

export default App;