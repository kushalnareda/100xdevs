import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title = "harkirat1"></Header>
      <Header title = "harkirat2"></Header>
    </>
  )
}
function Header({title}){
  return <div>
    {title}
  </div>
}
export default App
