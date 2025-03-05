import React from 'react'
import PC from './Pc.module.css'

//Child component 
const PropChildren = ({children}) => {
  return (
    <div>
      <section className={PC.card}>
        {/* Passing children keyword as syntax in one child structure which will was anywhere by just changing the data */}
        {children}
      </section>
    </div>
  )
}

export default PropChildren
