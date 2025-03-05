// import React from 'react'
// import Cardsty from './Card.module.css'

// const Card = () => {
//   return (
//     <div>
//       <div className={Cardsty.card}>
//         <img src="https://images.news18.com/ibnlive/uploads/2021/01/1611903590_2022-bmw-m5-cs-front-view.jpg" alt=""/>
//         <h2>BMW M5 CS Limited Edition</h2>
//         <p>Combined with the reduced vehicle weight, the high levels of power and torque and working through the 8-speed M Steptronic automatic <br />transmission with Drivelogic and the M xDrive all-wheel drive system, the M5 CS reaches 60 mph in just 2.9 seconds, 0.2 seconds quicker than the M5 Competition model.</p>
//         <button className={Cardsty.btn}>Add To Cart</button>
//       </div>

//       <div>
//         <table className={Cardsty.tab}>
//         <tr>
//             <th>Name</th>
//             <th>Education</th>
//             <th>Percentage</th> 
//         </tr>
//         <tr>
//             <td>Yash</td>
//             <td>BCA</td>
//             <td>85%</td>
//         </tr>

//         <tr>
//             <td>Kunal</td>
//             <td>BSC</td>
//             <td>80%</td>
//         </tr>

//         <tr>
//             <td>Amar</td>
//             <td>B.Tech</td>
//             <td>70%</td>
//         </tr>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Card



import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img 
          src="https://images.news18.com/ibnlive/uploads/2021/01/1611903590_2022-bmw-m5-cs-front-view.jpg" 
          alt="BMW M5 CS" 
          className={styles.image} 
        />
        <h2>BMW M5 CS Limited Edition</h2>
        <p>
          Combined with the reduced vehicle weight, the high levels of power and torque, and working through the 8-speed M Steptronic automatic 
          transmission with Drivelogic and the M xDrive all-wheel drive system, the M5 CS reaches 60 mph in just 2.9 seconds, 0.2 seconds quicker than the M5 Competition model.
        </p>
        <button className={styles.btn}>Add To Cart</button>
      </div>

      <div className={styles.tableContainer}>
        <h3>Student Details</h3>
        <div className={styles.gridTable}>
          <div className={styles.header}>Name</div>
          <div className={styles.header}>Education</div>
          <div className={styles.header}>Percentage</div>
          
          <div>Yash</div>
          <div>BCA</div>
          <div>85%</div>
          
          <div>Kunal</div>
          <div>BSC</div>
          <div>80%</div>
          
          <div>Amar</div>
          <div>B.Tech</div>
          <div>70%</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
