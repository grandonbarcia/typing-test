import React from 'react'
import { Row, Col } from 'react-bootstrap'

const StartDescription = () => {

    return (

        <Row className="h-25 align-items-center panel">
            <Col>
                <Row>
                    <Col>
                        Click <b>Start</b> to begin test.
                </Col>
                </Row>
                <Row>
                    <Col>
                        Press <b>ESC</b> To skip a quote.
                </Col>
                </Row>
            </Col>
        </Row >
    )
}

export default StartDescription
