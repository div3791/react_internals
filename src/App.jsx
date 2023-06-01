import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [count, setCount] = useState(() => 0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>Add</button>
      <button onClick={() => count > 0 && setCount(prev => prev - 1)}>Minus</button>
    </>
  )
}

export default App
