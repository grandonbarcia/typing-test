import React from 'react'

const letter = ({ children, bgColor }) => {
    const charStyle = {
        backgroundColor: bgColor
    }

    return (
        <span style={charStyle}>

            {children}

        </span>
    )
}

export default letter
