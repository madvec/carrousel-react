import React from 'react'

const imgContainer = (props) => {

    const background = `url(${props.src})`;

    return (
        <div style={{
            backgroundImage: background,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center",
            position:"absolute",
            left:0,
            top:0,
            right:0,
            bottom:0
        }}></div>
    )
}

export default imgContainer