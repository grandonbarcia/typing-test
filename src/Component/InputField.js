import React, { useEffect } from 'react'
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import { setInputState, useInputDispatch, useInputState } from '../Context'


const InputField = () => {
    const dispatch = useInputDispatch()
    const input = useInputState()

    const handleChange = (e) => {
        let inputString = e.target.value;
        setInputState(dispatch, inputString)

    }

    return (
        <Row className="justify-content-md-center">
            <Col xl={10}>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Type here"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                    />
                </InputGroup>
            </Col>
        </Row>
    )
}

export default InputField
