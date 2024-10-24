import React, { useState } from "react";
const ProfileCard = () => {

    // const object = { color: "black", backgroundColor: "grey", borderRadius: "10px", padding: "30px" };

    let [object, setObject] = useState({
        color: "black", backgroundColor: "grey", borderRadius: "10px", padding: "30px"
    });

    return (

        <div onCopy={() => {
            window.alert("Stop Stealing");

        }} style={object}>
            <h1> Profile card </h1>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, culpa alias ullam quia recusandae quod eaque, sit velit unde quibusdam eum. Quia sit fuga impedit unde illum ad vel fugiat!</p>


            <button onClick={() => {
                setObject((prevObject) => ({
                    ...prevObject,
                    color: "orange"
                }))
            }}>
                Click </button>
        </div >

    )

}

export default ProfileCard;