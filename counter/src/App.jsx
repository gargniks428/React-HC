import {useState} from 'react'

function App(){
  const [count,setCount]=useState(15);
  function handleInc(){
    setCount((prev)=>{
      if(prev>=20) return 20;
      return prev+1;
    })
  }

  function handleDec(){
    setCount((prev)=>{
      if(prev<=0) return 0;
      return prev-1;
    } )
  }
  return (
    <>
      <h1>Counter Program</h1>
      <p>current count {count}</p>
      <button onClick={handleInc}>Increase</button>
      <button onClick={handleDec}>Decrease</button>
    </>
  )
}

export default App;