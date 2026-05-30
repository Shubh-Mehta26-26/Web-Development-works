import { useState } from 'react'

import './App.css'
import LoginBtn from './Components/LoginBtn'
import LogoutBtn from './Components/LogoutBtn'

function App() {
  const[isLoggedIn,setLoggedIn]=useState(false)

  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  return(
    <div>
      <h1>Welcome Everyone to shubham web dev course </h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )


  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn />:<LoginBtn/>}
  //   </div>
  // )



//   if(isLoggedIn){
//     return(
//       <LogoutBtn />
//     )
//   }
//   else{
//     return(
//       <LogoutBtn />
//     )
//   }
  
// }
}
export default App
