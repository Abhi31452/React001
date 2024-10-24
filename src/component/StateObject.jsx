
import React, { useEffect, useState } from "react";

const StateObject = () => {

    const [movie, setMovie] = useState([
        {
            id: 1,
            name: "John Wick",
            rating: 4
        },
        {
            id: 2,
            name: "Equvilizer",
            rating: 7
        },

    ]);


    const [name, setName] = useState(() => {
        let sname = localStorage.getItem("name");
        return sname ? JSON.parse(sname) : "";
    })

    useEffect(() => {
        // localStorage.setItem('name' ,JSON.stringify(name))
        localStorage.clear(); 
        localStorage.setItem("name", JSON.stringify(name));
    }, [name])

    return (
        <>
            {movie.map(m => (
                <ul key={m.id} style={{ listStyle: "none" }}>
                    <li> {m.id}</li>
                    <li> {m.name}</li>
                    <li> {m.rating}</li>
                </ul>
            ))
            }

            <hr />
            <h1>{typeof name === "string" ? name : " " }</h1>
            <input type="text" onChange={(e) => { setName(e.target.value) }} />
            <button onClick={() => { setName ("") }}> clear</button>


        </>
    )
}

export default StateObject;


/////////////////////////////////////////////////////////////////////////////////import React, { useEffect, useState } from "react";

// const StateObject = () => {
//     const [movie, setMovie] = useState([
//         {
//             id: 1,
//             name: "John Wick",
//             rating: 4
//         },
//         {
//             id: 2,
//             name: "Equalizer",
//             rating: 7
//         },
//     ]);

//     // Fetching name from localStorage
//     const [name, setName] = useState(() => {
//         let sname = localStorage.getItem("name");
//         return sname ? JSON.parse(sname) : ""; // Ensure this is a string
//     });

//     useEffect(() => {
//         // Update localStorage whenever `name` changes
//         localStorage.setItem("name", JSON.stringify(name));
//     }, [name]);

//     return (
//         <>
//             {movie.map((m) => (
//                 <ul key={m.id} style={{ listStyle: "none" }}>
//                     <li>ID: {m.id}</li>
//                     <li>Name: {m.name}</li>
//                     <li>Rating: {m.rating}</li>
//                 </ul>
//             ))}

//             <hr />
//             {/* Render name safely */}
//             <h1>{typeof name === "string" ? name : ""}</h1> {/* This ensures name is a string */}
//             <input
//                 type="text"
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter your name"
//             />
//             <button onClick={() => setName("")}>Clear</button>
//         </>
//     );
// };

// export default StateObject;
