import React, { createContext, useState } from "react";

export const userData = createContext();

function UserContext({children}){
    const [username , setuser] = useState("Abhi")

   const updateUser=(newName)=>{
        setuser(newName);
    }

    return (
        <>
        <userData.Provider value={{username ,updateUser}}>
            {children}
        </userData.Provider>
        </>
    )
}

 export default UserContext;


 