import React from 'react'
import PropChildren from './PropChildren.jsx'
import car from './assets/pic1.jpg'

const Parent = () => {
  return (
    <div>
        <PropChildren>
            <section style={{display:"flex"}}>
                <img src={car} alt="" height={200}/>
                <article style={{marginLeft:20}}>
                    <h2>Porsche 911 GT3 RS</h2>
                    <p>Engine Type4.0 L 6-cylinderDisplacement3996 ccMax Power379.50bhp@6500rpmMax Torque465Nm@6300rpmNo. of Cylinders6Valves Per Cylinder4Turbo ChargerTransmission TypeAutomaticGearbox8-SpeedDrive TypeRWD</p>
                </article>
            </section>
        </PropChildren>
    </div>
  )
}
  
export default Parent
