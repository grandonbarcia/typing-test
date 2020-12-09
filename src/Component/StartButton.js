import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Spinner } from 'react-bootstrap'

const StartButton = ({ handleClick, text }) => {


    const LoadSpinner = () => {

        return (<Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
        />)


    }

    return (
        <Row>
            <Col>
                <Button variant="primary" onClick={handleClick}>
                    {text === 'Loading...' ? <LoadSpinner /> : ''}
                    {text}
                </Button>
            </Col>
        </Row>
    )
}

export default StartButton
