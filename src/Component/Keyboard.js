import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Key from './Key'

const ANSI_Layout = [
    ['Esc', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'del'],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\|'],
    ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';:', " ' " + ' " ', 'entr'],
    ['shft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/?', 'shft'],
    ['ctrl', 'win', 'alt', 'spce', 'alt', 'win', 'ctrl']]


const Keyboard = () => {


    const container = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }


    const listKeys = ANSI_Layout.map((rowOfKeys, i) =>

        <div className="justify-content-md-center" style={container}>
            {rowOfKeys.map((key, j) => <Key>{key} </Key>)}
        </div>



    )


    return (
        <Row className="justify-content-md-center h-50" style={{ backgroundColor: 'lightgrey' }} >
            <Col xl={10} >
                {listKeys}
            </Col>
        </Row >
    )
}

export default Keyboard
