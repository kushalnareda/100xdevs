import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  function onClick() {
    console.log("child clicked")
  }

  return <div>
    <Child onClick={onClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}
// you can pass functytyion as props 
//proips are the properties taht are passed down from the parent compnent
//to the child  components
const Child = memo(({onClick}) => { // memo here is used so avoid rerendering when the props are not changed
  console.log("child render") 

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})

export default App;