import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const StartButton = ({ handleClick, text }) => {



    return (
        <Row>
            <Col>
                <Button variant="primary" onClick={handleClick}> {text}</Button>
            </Col>
        </Row>
    )
}

export default StartButton
