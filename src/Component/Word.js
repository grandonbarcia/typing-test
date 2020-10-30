import React, { useState, useEffect } from 'react'
import { useInputState } from '../Context'


const green = 'rgba(0, 255, 0, 0.3)';
const red = 'rgba(255, 0, 0, 0.3)';
const lightGray = 'lightgrey'



const Word = ({ children, id, word }) => {

    const input = useInputState();

    const checkWord = (currentWord, i) => {
        if (input[i] !== currentWord && input.length - 1 === i) {
            return green
        } else if (input[i] !== currentWord && input.length > i) {
            return red
        }

    };


    const wordStyle = {
        padding: '2px',
        backgroundColor: checkWord(word, id)
    };





    return (
        <span style={wordStyle} >

            { children}

        </span >
    )
}

export default Word
