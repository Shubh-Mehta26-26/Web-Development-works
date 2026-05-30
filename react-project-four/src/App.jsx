import { useState } from 'react';
import Card from './Components/Card'
import Button from './Components/Button'

function App() {
  const [count, setCount] = useState(0);
  const [doubleVal, setDoubleVal] = useState(1);

  function handleClick() {
    setCount(count + 1);
  }

  function doubleCount() {
    setDoubleVal(doubleVal * 2);
  }

  return (
    <div>
      <div>
        <Button handleClick={handleClick} text="click me"><h1>{count}</h1></Button>
        <Button handleClick={doubleCount} text="double"><h1>{doubleVal}</h1></Button>
      </div>
      
      
      
      {/* <Card name="shubham mehta">
          <h1>I want to study AI/ML</h1>
          <p>Trying to consistent in this</p>
          <p>will complete the course soon</p>
      </Card> */}
    </div>
  )
}

export default App;
