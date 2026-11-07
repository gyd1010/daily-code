import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect')
  }, [count])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default App;
