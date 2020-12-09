import React from 'react'
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

    let color = checkWord(word, id);

    const wordStyle = {
        padding: '2px',
        backgroundColor: color,
        borderRadius: '4px',
    };

    return (
        <span style={wordStyle} >
            { children}
        </span >
    )
}

export default Word
