function Son(props) {
  console.log(props)
  return <div>This is son, {props.name},jsx:{props.children}</div>
}
function App() {
  // const name = "this is app name"
  return (
    <>
      <Son><div>nihao</div></Son>
    </>
  )
}

export default App;
