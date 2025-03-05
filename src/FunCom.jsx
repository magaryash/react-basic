import React from 'react'

const FunCom = () => {
  let styto = {
    color: 'red',
    fontSize: '60px',
    border : '1px solid black',
    padding : '15px',
    textAlign : 'center'
  }
  return (
    <div>
      {/* Inline Object css for react */}
      <h1 style={{color:"red" , backgroundColor:"yellow", textAlign:"center", fontSize:"80px"}}>Hello</h1>

      {/* Object css */}
      <h1 style={styto}> Yashodip </h1>
    </div>
  )
}

export default FunCom
