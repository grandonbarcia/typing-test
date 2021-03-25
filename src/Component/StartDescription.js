import React from 'react'
import { Row, Col } from 'react-bootstrap'

const StartDescription = () => {

    const style = {
        fontSize: '25px',
        marginBottom: '50px'
    }

    return (

        <Row style={style} className="h-50 align-items-end panel">
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
