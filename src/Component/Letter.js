import React from 'react'
import { useInputState } from '../Context'

const green = 'rgba(0, 255, 0, 0.7)';
const red = 'rgba(255, 0, 0, 0.7)';
const lightGray = 'lightgrey'



const Letter = ({ children, char, i, j }) => {


    const input = useInputState();



    const checkChar = (char, i, j) => {
        if (input[input.length - 1].split('')[j] == char && input.length - 1 == i) {


        }
    }

    let color = checkChar(char, i, j);

    const charStyle = {
        backgroundColor: color
    }


    return (
        <span style={charStyle} >

            {children}

        </span>
    )
}

export default Letter
