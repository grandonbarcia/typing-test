import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Stats = () => {
    return (
        <>
            <Row className="justify-content-md-center h-25">
                <Col xl={7}>
                    <Row className="mt-5">
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            Time
                    </Col>
                        <Col>
                            Words/min
                    </Col>
                        <Col>
                            Errors
                    </Col>
                        <Col>
                            Error Rate
                    </Col>
                        <Col>
                            Last Key
                    </Col>
                    </Row>
                </Col>
            </Row>
        </>

    )
}

export default Stats
