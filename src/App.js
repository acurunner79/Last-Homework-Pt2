import React, { useEffect } from 'react'
import './App.css';

function App() {

  useEffect(() => {
    const makeAPICall = async () => {
    try {
      const res = await fetch("http://localhost:3000/products")
      const json = await res.json()

      console.log('Products JSON', json)
    } catch (error){
      console.log(error)
    }
    }
    makeAPICall()
  }, [])

  return (
    <div className="App">
      <h1>Products</h1>
    </div>
  );
}

export default App;
