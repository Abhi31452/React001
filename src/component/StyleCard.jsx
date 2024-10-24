import React, { useState } from "react"

function Stylecard() {

    const [friend, setFriend] = useState(["Alex", "Joy"])
    const [newFriend, setnewFriend] = useState("");

    function changeFriend(eve) {
        setnewFriend(eve.target.value)
    }
    const addFriend = () => {
        if (newFriend.trim())
            setFriend([...friend, newFriend])
        setnewFriend("")
    }

    return (
        <div style={{ background: "lightblue", padding: 20, borderRadius: 10, color: "darkblue" }}>
            Hi from Style card


            <input type="text" value={newFriend} onChange={changeFriend} style={{ marginBottom: "10px", padding: "5px" }} placeholder="Enter ur name "/> 
            <button onClick={addFriend}> Add new friend </button>

            <ul>
                {friend.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}    </ul>
        </div>
    )
}

export default Stylecard;