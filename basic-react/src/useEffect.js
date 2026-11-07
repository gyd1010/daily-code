import { useEffect, useState } from 'react'
const URL = 'http://geek.itheima.net/v1_0/channels'
function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL)
      const list = await res.json()
      console.log(list)
      setList(list.data.channels)
    }
    getList()
  }, [])
  return (
    <div>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App;
