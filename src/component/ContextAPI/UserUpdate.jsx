import { useContext, useState } from "react";
import { userData } from "./UserContext";


function UserUpdate() {

    const { updateUser } = useContext(userData);
    const [newName, setnewName] = useState("")

    function handle(e) {
        e.preventDefault();
        updateUser(newName)
        setnewName("");
    }

    return (
        <>
            <h1> Update </h1>
            <form onSubmit={handle}>
                <input type="text" value={newName} onChange={(e) => setnewName(e.target.value)} />
                <button type="submit">Update</button>
            </form>
        </>
    )
}
export default UserUpdate;


// //import { useContext, useState } from "react";
// import { userData } from "./UserContext"; // Use curly braces here

// function UserUpdate() {
//     const { updateUser } = useContext(userData);
//     const [newName, setNewName] = useState("");

//     function handle(e) {
//         e.preventDefault(); // Prevent form submission
//         updateUser(newName);
//         setNewName("");
//     }

//     return (
//         <>
//             <h1>Update</h1>
//             <form onSubmit={handle}>
//                 <input
//                     type="text"
//                     value={newName}
//                     onChange={(e) => setNewName(e.target.value)}
//                 />
//                 <button type="submit">Update</button> {/* Add a submit button */}
//             </form>
//         </>
//     );
// }

// export default UserUpdate;
