import React, { useState, useEffect } from 'react'

const Word = ({ children, bgColor, key }) => {

    const wordStyle = {
        padding: '2px',
        backgroundColor: bgColor
    }




    useEffect(() => {

    }, [])

    return (
        <span style={wordStyle} >

            { children}

        </span >
    )
}

export default Word
