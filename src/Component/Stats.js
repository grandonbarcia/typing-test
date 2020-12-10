import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Stats = ({ wpm }) => {

    const style = {
        fontSize: '25px',
    }
    return (

        <Row style={style}>
            <Col>
                Speed: {wpm} WPM
            </Col>
        </Row>


    )
}

export default Stats
