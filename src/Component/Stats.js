import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Stats = ({ wpm }) => {


    return (

        <Row style={{ position: 'absolute' }}>
            <Col>
                Speed: {wpm} WPM
            </Col>
        </Row>


    )
}

export default Stats
