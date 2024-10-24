import React from 'react'

const weather = (props) => {

    function temp() {
        if (props < 15) {
            return (<h1> cold </h1>)
        } else if (props > 15 && props < 25) {
            return (<h1> medium </h1>)
        } else {
            return (<h1> Hot </h1>)
        }
    }

    return (
        <div>


        </div>
    )
}

export default weather
