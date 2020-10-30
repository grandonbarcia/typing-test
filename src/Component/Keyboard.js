import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Keyboard = () => {

    let array = [1][13];
    console.log(array);

    return (
        <Row className="justify-content-md-center">
            <Col>
                Keyboard
            </Col>
        </Row>
    )
}

export default Keyboard
