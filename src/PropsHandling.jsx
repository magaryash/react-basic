import React from 'react';

const PropsHandling = ({ Name, Age, IsMarried, hobbies, address , msg= [] }) => {
    let cardStyle = {
        maxWidth: "300px",
        border: "2px solid black",
        padding: "20px",
        // margin: "auto",
        backgroundColor:"lightcoral",
        borderRadius: "10px"
    };

    return (
        <section style={cardStyle}>
            <h2>Name: {Name}</h2>
            <h2>Age: {Age}</h2>
            <h2>Is Married:{IsMarried}</h2>

            <h3>Hobbies:</h3>
            <ul>
                {hobbies?.map((ele, index) => (
                    <li key={index}>{ele}</li>
                ))}
            </ul>
            <h3>Address: {address.city} , {address.country}</h3>
            <h2>{msg}</h2>
        </section>
    );
};

export default PropsHandling;



// Child Component
// import React from 'react';

// const PropsHandling = ({ Name, Age, IsMarried, hobbies, address , msg= [] }) => {


//     return (
//         <>
//         <section>
//             {/* Passing the string datatypes */}
//             <h2>Name: {Name}</h2>
//             {/* Passing the string number */}
//             <h2>Age: {Age}</h2>
//             {/* Passing the string boolean */}
//             <h2>Is Married:{IsMarried}</h2>
//             <h3>Hobbies:</h3>
//             <ul>
//                 {/* passing the array datatypes and iterating over it by using map */}
//                 {hobbies?.map((ele, index) => (
//                     <li key={index}>{ele}</li>
//                 ))}
//             </ul>
//             <h3>Address: {address.city} , {address.country}</h3>
//             <h2>{msg}</h2>
//         </section>
//         </>
//     );
// };

// export default PropsHandling;
