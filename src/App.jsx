// import React  from "react";

//  export const App = () => {
//   return (
//     <div>
//       <h1>My First React App</h1>
//       {/* html code */}
//       <h1>5+5</h1> 
//       {/* html + js code with js regular expression*/}
//       <h1>{5+5}</h1>
//     </div>

//   )
// }

import React from 'react'
import FunCom from './FunCom.jsx'
import Compclass from './Compclass.jsx'

const App = () => {
  return (
    <div>
      <h1>Im App </h1>
      <FunCom/>
      <Compclass/>
    </div>
  )
}

export default App
