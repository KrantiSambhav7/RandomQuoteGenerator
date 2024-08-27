import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios" ; 

function App() {
  const [advice, setAdvice ] = useState("Hello this is where I give u good advice for your life")
  async function fetchData() { 
    const res = await axios.get('https://api.adviceslip.com/advice') ; 
    const text = res.data.slip.advice ; 
    setAdvice(text) ; 
  }
  return (
    <div className='app'>
      <div className='card'>
        <h1 className='heading'>{advice}</h1> 
        <button class="button-50" role="button" onClick={() => {
          fetchData() ; 
        }}>Double click for the life advice</button>
      </div>
    </div>
  )
}

export default App
