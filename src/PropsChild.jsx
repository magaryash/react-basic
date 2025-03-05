import React from 'react'

const PropsChild = ({name,id,photo,comp}) => {
    let head ={
        border:"2px solid black",
        padding :"20px",
        width :"300px",
        height:"400px",
        backgroundColor :"lightgrey",
        borderRadius : "15px",
        gap:"20px"
    }
  return (
    <div>
        <section style={head}>
            <img src={photo} alt="Profile" height={225} width={290}/>
            <h1>Owner:{name}</h1>
            <h1>Car-Model:{id}</h1>
            <h1>Company:{comp}</h1>
        </section>
    </div>
  )
}

export default PropsChild
