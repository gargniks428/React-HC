import { useState } from "react";

function App() {
  const [color,setColor]=useState('pink')
  function handle(e){
      console.log('Clicked');
      setColor((color)=>(color=e))
      
  }
  return (

    <div style={{backgroundColor:color, width: '100%', height:'100vh' } } >
    <div > 
      <button onClick={()=>handle('red')}>Red</button>
      <button onClick={()=>handle('blue')}>Blue</button>
      <button onClick={()=>handle('white')}>White</button>
      <button onClick={()=>handle('Black')}>Black</button>
      <button onClick={()=>handle('yellow')}>Yellow</button>
    </div>
    </div>
  )
}

export default App
