import React from 'react'
import { useInputState } from '../Context'

const green = 'rgba(0, 255, 0, 0.3)';
const red = 'rgba(255, 0, 0, 0.3)';
const lightGray = 'lightgrey'



const Letter = ({ children, char, i, j }) => {


    const input = useInputState();


    const checkChar = () => {
        let currInputChar = input[input.length - 1].split('')[j]
        let currInputCharIndex = input[input.length - 1].split('').length - 1;


        if (input.length - 1 == i) {
            if (currInputChar === undefined) {
                return green
            } else if (currInputChar == char) {
                return green
            } else if (currInputChar !== char) {
                return red
            } else {
                return red
            }
        }
    }

    let color = checkChar();

    const charStyle = {
        backgroundColor: color,
        fontSize: '25px'
    }


    return (
        <span style={charStyle} >

            {children}

        </span>
    )
}

export default Letter


// if (input[input.length - 1].split('')[j] == char && input.length - 1 == i) {

//     return green
// }