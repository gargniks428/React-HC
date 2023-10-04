import {useState,useCallback, useEffect, useRef} from 'react'

function App(){
  const [length,setLength]=useState(8);
  const [numbers,setNumbers]=useState(true);
  const [spChar,setSpChar]=useState(false);
  const [password,setPassword]=useState('fdafadsfsadfas')
  const passwordGenerator=useCallback(()=>{
    let pass='';
    let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(numbers) str+='0123456789';
    if(spChar) str+='!@#$%^&*()_-+={}[]:;?/<>'
    for(let i=0;i<length;i++){
      pass+=str[Math.floor(Math.random()*str.length)];
    }
    setPassword(pass);
  },[length,numbers,spChar,setPassword])
  
  useEffect(()=>{
    passwordGenerator()
  },[length,numbers,spChar,setPassword,passwordGenerator])

  const passwordRef=useRef(null)
  const copyToClipBoard=()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className='text-center mt-10 bg-blue-950 ml-28 mr-28 text-orange-500 rounded-lg p-5' >
      <h1>Password Generator</h1>
      <div>
        <input 
          type="text" 
          name="password" 
          value={password} 
          readOnly
          ref={passwordRef}
        />
        <button className='text-white bg-blue-500' onClick={copyToClipBoard}>Copy</button><br />
      </div>
      <div>
        <input 
          type="range" 
          name='length'
          id='length'
          min={8}
          max={50}
          value={length} 
          onChange={(e)=>setLength(e.target.value)}
        />
        <label htmlFor="length">length:{length}</label>
        <input 
          type="checkbox" 
          id="numbers" 
          value={numbers}
          defaultChecked={numbers}
          onChange={()=>setNumbers(!numbers)}
        />
        <label htmlFor="numbers">Numbers</label>
        <input 
          type="checkbox" 
          defaultChecked={spChar}
          id="characters" 
          value={spChar}
          onChange={()=>setSpChar(!spChar)}
        />
        <label htmlFor="characters">Characters</label>
      </div>

    </div>
  )
}

export default App