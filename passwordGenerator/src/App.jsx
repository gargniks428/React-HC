import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAll,setNumberAll]=useState(false);
  const [character,setCharacter]=useState(true)

  return (
    <>
      <h1 className='text-4xl text-center text-blue-700'>Passsword Generator</h1>  
      <div className='text-center text-white bg-black text-center m-5 p-6'>
        <input type="text" name="password" id="password" />
        <button className=' bg-purple-400'>Copy</button><br />
        <input type="range" name="range" id="range" min={5} max={20}/>length({length})
        <input type="checkbox" name="letter" id="letter" />Letters
        <input type="checkbox" name="numbers" id="numbers" />Numbers
      </div>
    </>
  )
}

export default App
