// import React, { useState } from 'react'

// const States = (name) => {
//     let [count, setCount] = useState(0);

//     // const increment = () => {
//     //     setCount(count + 1);
//     // }
//     // const decrement = () => {
//     //     setCount(count - 1);
//     // }

//     function gree(){
//       console.log("Hello, World!");
//     }
//     function gree2(){
//       console.log("Hello" + name);
//     }
//   return (
//     <div>
//       <h2>React Counter</h2>
//       <h1>{count}</h1>

//       {/* inline function with arrow function */}
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>


//       {/* Non parameterizes function does not need the inline function*/}/
//       <button onClick={gree}> Click </button>
//       {/* Paarmeterized function needs the inline arrow function */}
//       <button onClick={()=> gree2("Yash")}> Click me</button>

//       {/* <button onClick={increment}>  +  </button>
//       <button onClick={decrement}>  -  </button> */}
//     </div>
//   )
// }
 
// export default States


// 2]handling array by using states 
// import React, { useState } from 'react'

// const States = () => {
// let [user, setUser] = useState(["Yash" , 21 , "Problemship"])

// function change(){
//   setUser(["Kunal" , 22 , "Also in Problemship"])
// }

//   return (
//     <div>
//       {/* Array handling in states */}
//       <h2>Hi my name is {user[0]} and my age is {user[1]} and my relationship status is {user[2]} </h2>

//       {/* Array handling in interpalution method */}
//       <h2>{`Hi my name is ${user[0]} and my age is ${user[1]} and my relationsip status is ${user[2]}`}</h2>
//       <button onClick={change}>Change user</button>
//     </div>
//   )
// }

// export default States



// 3] Handling Object by using states
import React , { useState }from 'react'

const States = () => {
  let [user, setUser] = useState({
    name: "BMW",
    model :"M5 CS",
    avatar :"https://cdnb.artstation.com/p/assets/images/images/036/096/827/large/erik-m1999-m5-utah-2.jpg?1616704644"
  })

  function change (){
    setUser({
      name: "Porsche",
      model :"911 GT3 RS",
      avatar:"https://images.alphacoders.com/135/1357373.jpeg"
    })
  }

  return(
    <>
     <section>
      <div>
        <img src={user?.avatar} alt="" height={200}/>
      </div>
      <div>
        {/* by using ?  we can use optional channing by using this if the value is null or undefined it will not throw any error */}
        <h1>{`${user?.name} ${user?.model}`}</h1>
      </div>
      <button onClick={change}>Change user</button>
      </section> 
    </>
  )
}

export default States
