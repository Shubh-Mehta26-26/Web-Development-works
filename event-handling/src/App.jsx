import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    alert("I am clicked")
  }

  function handleOver(){
    alert("I am mouse overed")
  }

  function handleInputChange(e){
    console.log("value till now: ",e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    alert("form submit krudu kya")
  }


  return (


    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form>


      {/* <div> 
        <p onMouseOver={handleOver}>i am a paragarph</p>

        <button onClick={handleClick}>Click me</button>
        </div> */}
    </>
  )
}

export default App
