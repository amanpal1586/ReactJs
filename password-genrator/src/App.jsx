import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  // useRef hook
  const passRef = useRef(null)
 

   const passgenrator = useCallback(() => {
  
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    

    if(numberAllowed)  str = str + "0123456789" 
    if(charAllowed)  str = str + "!@#$%^&*" 

    for (let i = 1; i <= length; i++) {
      
    let randomIndex = Math.floor(Math.random() * length + 1)

    pass += str.charAt(randomIndex)

    setPassword(pass)

    

    }

   }
    ,[length, numberAllowed, charAllowed, setPassword])
    
    
  useEffect(() => {
      passgenrator()
    },[length,charAllowed,numberAllowed,passgenrator])

  const copyPassword = useCallback(() => {
      passRef.current?.select()
      window.navigator.clipboard.write(password)
    },[password])
  return (
    <>
  <div className=' w-full max-w-md shadow-lg rounded-lg bg-orange-500 justify-center text-center mx-auto px-8 py-1 my-4 text-white'>Password Genrator
    <div className='flex shadow-md overflow-hidden flex-wrap bg-white text-black justify-start rounded-lg px-4 py-4'>
      <input className='flex shadow-md overflow-hidden flex-wrap bg-white text-black justify-start rounded-lg px-15 m-2 py-2 outline-none w-full'
      type='text'
      value={password}
      placeholder='password'
      readOnly
      ref={passRef}
      />
    <button onClick={() => navigator.clipboard.writeText(password)} 
    className='mx-1 rounded-lg shadow-lg bg-black text-white px-5 py-1 justify-end cursor-pointer hover:bg-gray-800' >Copy</button>
  </div>

  <div className='flex text-sm gap-x-2'>
  <div className='flex items-center gap-x-1'>
    <input type="range"
    min={8}
    max={50}
    value={length}
    className='cursor-pointer' 
    onChange={(e) => {
      setLength(e.target.value)
    }}
    />
    <label className='text-xl'>Length:{length}</label>
  </div>
  <div className='flex flex-wrap text-2xl items-center'>
    <input
    type='checkbox'
    defaultChecked={numberAllowed}
    className='my-2 overflow-hidden'
    id='numberInput'
    onChange={(e) => {
      setNumberAllowed((prev) => !prev)
    }}
    />
    <label>Numbers</label>
  </div>
  <div className='flex flex-wrap text-2xl items-center'>
    <input
    type='checkbox'
    defaultChecked={charAllowed}
    className='my-2'
    id='numberInput'
    onChange={(e) => {
      setcharAllowed((prev) => !prev)
    }}
    />
    <label>Character</label>
  </div>
  </div>
  </div>

    
    </>
  )
}

export default App
