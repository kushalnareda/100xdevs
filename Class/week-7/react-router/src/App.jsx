import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { LandingPage } from './components/Landing';

function App() {

  return (
    <div>
      <div >
        <button onClick={()=>{
          window.location.href ="/";
        }}>Landing Page</button>
        <button onClick={()=>{
          window.location.href ="/dashboard";
        }}>Dashboard</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
