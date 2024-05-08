import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { RevenueCardNext } from './components/RevenueCardNext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-3'>
      <RevenueCardNext title={"Next payout"} amount={"2,312.23"} orderCount={23}  />
      <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />
      <RevenueCard title={"Amount processed"} amount={"23,92,312.19"} />
    </div>
  )
}

export default App
