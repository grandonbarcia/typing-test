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
                            Speed
                         </Col>
                        <Col>
                            Accuracy
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>

    )
}

export default Stats
